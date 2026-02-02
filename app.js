$(document).ready(function() {
    let periodPieChart = null;
    let hpHcPieChart = null;
    let monthlyBarChart = null;
    let allData = null; // Stocker toutes les données
    let completeYears = []; // Stocker les années complètes
    let currentYearIndex = 0; // Index de l'année actuellement affichée

    // Peupler la liste déroulante des abonnements depuis market.js
    populateSubscriptionOptions();

    // Gestion du changement de fichier
    $('#fileInput').on('change', function(e) {
        const file = e.target.files[0];
        if (file) {
            processFile(file);
        }
    });
    
    // Gestion du changement de type d'abonnement
    $('#subscriptionType').on('change', function() {
        // Recalculer et afficher les résultats si des données sont disponibles
        if (allData && completeYears.length > 0) {
            displayYearData(completeYears[currentYearIndex]);
        }
    });
    
    // Gestion du carrousel - année précédente
    $('#prevYear').on('click', function() {
        if (currentYearIndex > 0) {
            currentYearIndex--;
            updateYearDisplay();
            displayYearData(completeYears[currentYearIndex]);
        }
    });
    
    // Gestion du carrousel - année suivante
    $('#nextYear').on('click', function() {
        if (currentYearIndex < completeYears.length - 1) {
            currentYearIndex++;
            updateYearDisplay();
            displayYearData(completeYears[currentYearIndex]);
        }
    });

    function populateSubscriptionOptions() {
        const $select = $('#subscriptionType');
        $select.empty(); // Vider les options existantes
        
        // Récupérer les kVA disponibles depuis edfTempo
        edfTempo.subscriptions.forEach(sub => {
            $select.append(`<option value="${sub.kva}">${sub.kva} kVA</option>`);
        });
    }

    function processFile(file) {
        // Afficher le loader
        $('#loading').show();
        $('#error').hide();
        $('#results').hide();

        const reader = new FileReader();
        
        reader.onload = function(e) {
            processFileContent(e.target.result);
        };
        
        reader.onerror = function() {
            $('#loading').hide();
            $('#error').text('❌ Erreur lors de la lecture du fichier.').show();
        };
        
        reader.readAsText(file, 'UTF-8');
    }

    function processFileContent(csvContent) {
        // Afficher le loader
        $('#loading').show();
        $('#error').hide();
        $('#results').hide();

        try {
            // Traiter les données CSV
            const processedData = parseCSV(csvContent);
            
            // Stocker toutes les données
            allData = processedData;
            
            // Identifier les années complètes
            identifyCompleteYears(processedData);
            
            // Afficher le carrousel d'année si plusieurs années
            if (completeYears.length > 0) {
                // Sélectionner l'année la plus récente par défaut
                currentYearIndex = completeYears.length - 1;
                $('#yearCarousel').show();
                updateYearDisplay();
                
                // Afficher l'année la plus récente par défaut
                displayYearData(completeYears[currentYearIndex]);
            } else {
                $('#error').text('❌ Aucune année complète trouvée dans le fichier.').show();
            }
            
            $('#loading').hide();
            $('#results').show();
            
            // Masquer le formulaire d'import une fois le rapport affiché
            $('.upload-section').hide();
            
        } catch (error) {
            $('#loading').hide();
            $('#error').text('❌ Erreur lors de la lecture du fichier : ' + error.message).show();
            console.error(error);
        }
    }

    function parseCSV(csvContent) {
        const lines = csvContent.split('\n');
        const rawData = [];
        let headerFound = false;
        let headerIndex = -1;
        
        // Trouver la ligne d'en-tête
        for (let i = 0; i < lines.length; i++) {
            if (lines[i].includes('Date de relev') || lines[i].includes('Date de relevé')) {
                headerFound = true;
                headerIndex = i;
                console.log('En-tête trouvé à la ligne', i);
                break;
            }
        }
        
        if (!headerFound) {
            throw new Error('En-tête du fichier CSV non trouvé. Vérifiez que le fichier contient la ligne d\'en-tête.');
        }
        
        // Parser l'en-tête pour identifier les index des colonnes
        const headerLine = lines[headerIndex];
        const headerColumns = headerLine.split(';');
        
        // Trouver les index des colonnes par leur nom
        let idxBleuHC = -1, idxBleuHP = -1, idxBlancHC = -1, idxBlancHP = -1, idxRougeHC = -1, idxRougeHP = -1;
        
        for (let i = 0; i < headerColumns.length; i++) {
            const colName = headerColumns[i].trim();
            if (colName.includes('Index Heures Creuses Bleu')) {
                idxBleuHC = i;
            } else if (colName.includes('Index Heures Pleines Bleu')) {
                idxBleuHP = i;
            } else if (colName.includes('Index Heures Creuses Blanc')) {
                idxBlancHC = i;
            } else if (colName.includes('Index Heures Pleines Blanc')) {
                idxBlancHP = i;
            } else if (colName.includes('Index Heures Creuses Rouge')) {
                idxRougeHC = i;
            } else if (colName.includes('Index Heures Pleines Rouge')) {
                idxRougeHP = i;
            }
        }
        
        // Vérifier que toutes les colonnes ont été trouvées
        if (idxBleuHC === -1 || idxBleuHP === -1 || idxBlancHC === -1 || 
            idxBlancHP === -1 || idxRougeHC === -1 || idxRougeHP === -1) {
            throw new Error('Certaines colonnes requises sont manquantes dans le fichier CSV.');
        }
        
        console.log('Index des colonnes:', {
            bleuHC: idxBleuHC, bleuHP: idxBleuHP,
            blancHC: idxBlancHC, blancHP: idxBlancHP,
            rougeHC: idxRougeHC, rougeHP: idxRougeHP
        });
        
        // Parser les données à partir de la ligne suivant l'en-tête
        for (let i = headerIndex + 1; i < lines.length; i++) {
            const line = lines[i].trim();
            if (!line) continue; // Ignorer les lignes vides
            
            // Séparer par point-virgule
            const columns = line.split(';');
        
            const date = columns[0].trim();
            if (!date) continue;
            
            // Extraire les valeurs en utilisant les index identifiés
            const bleuHP = parseFloat(columns[idxBleuHP]) || 0;
            const bleuHC = parseFloat(columns[idxBleuHC]) || 0;
            const blancHP = parseFloat(columns[idxBlancHP]) || 0;
            const blancHC = parseFloat(columns[idxBlancHC]) || 0;
            const rougeHP = parseFloat(columns[idxRougeHP]) || 0;
            const rougeHC = parseFloat(columns[idxRougeHC]) || 0;
            
            // Ne stocker que les lignes ayant au moins une valeur > 0
            if (bleuHP > 0 || bleuHC > 0 || blancHP > 0 || blancHC > 0 || rougeHP > 0 || rougeHC > 0) {
                rawData.push({
                    date: date,
                    bleuHP: bleuHP,
                    bleuHC: bleuHC,
                    blancHP: blancHP,
                    blancHC: blancHC,
                    rougeHP: rougeHP,
                    rougeHC: rougeHC
                });
            }
        }
        
        // Trier les données par date croissante
        rawData.sort((a, b) => {
            // Convertir les dates au format jj/mm/aaaa en objets Date pour comparaison
            const parseDate = (dateStr) => {
                const parts = dateStr.split('/');
                if (parts.length === 3) {
                    // Format jj/mm/aaaa
                    return new Date(parts[2], parts[1] - 1, parts[0]);
                }
                return new Date(dateStr);
            };
            return parseDate(a.date) - parseDate(b.date);
        });
        
        console.log('Données triées par date croissante:', rawData.length, 'lignes');
        
        // Calculer les consommations après le tri
        const consumptionData = [];
        let previousIndexes = null;
        
        for (let i = 0; i < rawData.length; i++) {
            const currentIndexes = rawData[i];
            
            // Calculer la consommation (delta avec le jour précédent)
            if (previousIndexes) {
                const consumption = {
                    date: currentIndexes.date,
                    bleuHP: Math.max(0, currentIndexes.bleuHP - previousIndexes.bleuHP),
                    bleuHC: Math.max(0, currentIndexes.bleuHC - previousIndexes.bleuHC),
                    blancHP: Math.max(0, currentIndexes.blancHP - previousIndexes.blancHP),
                    blancHC: Math.max(0, currentIndexes.blancHC - previousIndexes.blancHC),
                    rougeHP: Math.max(0, currentIndexes.rougeHP - previousIndexes.rougeHP),
                    rougeHC: Math.max(0, currentIndexes.rougeHC - previousIndexes.rougeHC)
                };
                
                consumption.total = consumption.bleuHP + consumption.bleuHC + 
                                   consumption.blancHP + consumption.blancHC + 
                                   consumption.rougeHP + consumption.rougeHC;
                
                // N'ajouter que si la consommation totale est > 0
                if (consumption.total > 0) {
                    consumptionData.push(consumption);
                }
            }
            
            previousIndexes = currentIndexes;
        }
        
        if (consumptionData.length === 0) {
            throw new Error('Aucune donnée de consommation trouvée dans le fichier.');
        }
        
        return consumptionData;
    }
    
    function identifyCompleteYears(data) {
        if (data.length === 0) return;
        
        // Compter le nombre de jours par année
        const yearCounts = {};
        
        data.forEach(day => {
            const parts = day.date.split('/');
            if (parts.length === 3) {
                const year = parts[2];
                if (!yearCounts[year]) {
                    yearCounts[year] = 0;
                }
                yearCounts[year]++;
            }
        });
        
        console.log('Nombre de jours par année:', yearCounts);
        
        // Retenir toutes les années (même partielles)
        completeYears = [];
        for (const year in yearCounts) {
            completeYears.push(year);
        }
        
        // Trier les années par ordre croissant
        completeYears.sort();
        
        console.log('Années retenues:', completeYears);
    }
    
    function updateYearDisplay() {
        // Mettre à jour l'affichage de l'année
        $('#yearDisplay').text(completeYears[currentYearIndex]);
        
        // Activer/désactiver les boutons selon la position
        $('#prevYear').prop('disabled', currentYearIndex === 0);
        $('#nextYear').prop('disabled', currentYearIndex === completeYears.length - 1);
    }
    
    function displayYearData(year) {
        if (!allData) return;
        
        // Filtrer les données pour l'année sélectionnée
        const yearData = allData.filter(day => {
            const parts = day.date.split('/');
            return parts.length === 3 && parts[2] === year;
        });
        
        console.log('Affichage des données pour l\'année', year, ':', yearData.length, 'jours');
        
        // Afficher les résultats pour cette année
        displayResults(yearData);
    }

    function displayResults(data) {
        if (data.length === 0) {
            $('#error').text('❌ Aucune donnée de consommation trouvée dans le fichier.').show();
            return;
        }
        
        // Tarifs TTC par catégorie (en €/kWh) - récupérés depuis market.js
        const tarifs = {
            bleuHC: edfTempo.tariff.hcBlue,
            bleuHP: edfTempo.tariff.hpBlue,
            blancHC: edfTempo.tariff.hcWhite,
            blancHP: edfTempo.tariff.hpWhite,
            rougeHC: edfTempo.tariff.hcRed,
            rougeHP: edfTempo.tariff.hpRed
        };
        
        // Calculer les statistiques
        const totalConsumption = data.reduce((sum, day) => sum + day.total, 0);
        
        // Calculer les totaux par couleur et période (6 catégories)
        const totals = {
            bleuHP: data.reduce((sum, day) => sum + day.bleuHP, 0),
            bleuHC: data.reduce((sum, day) => sum + day.bleuHC, 0),
            blancHP: data.reduce((sum, day) => sum + day.blancHP, 0),
            blancHC: data.reduce((sum, day) => sum + day.blancHC, 0),
            rougeHP: data.reduce((sum, day) => sum + day.rougeHP, 0),
            rougeHC: data.reduce((sum, day) => sum + day.rougeHC, 0),
            // Totaux par couleur (pour le premier camembert)
            bleu: 0,
            blanc: 0,
            rouge: 0
        };
        
        // Calculer les totaux par couleur
        totals.bleu = totals.bleuHP + totals.bleuHC;
        totals.blanc = totals.blancHP + totals.blancHC;
        totals.rouge = totals.rougeHP + totals.rougeHC;
        
        // Calculer les coûts par catégorie
        const costs = {
            bleuHP: totals.bleuHP * tarifs.bleuHP,
            bleuHC: totals.bleuHC * tarifs.bleuHC,
            blancHP: totals.blancHP * tarifs.blancHP,
            blancHC: totals.blancHC * tarifs.blancHC,
            rougeHP: totals.rougeHP * tarifs.rougeHP,
            rougeHC: totals.rougeHC * tarifs.rougeHC
        };
        
        // Calculer le coût de consommation
        const consumptionCost = costs.bleuHP + costs.bleuHC + costs.blancHP + 
                               costs.blancHC + costs.rougeHP + costs.rougeHC;
        
        // Récupérer le type d'abonnement
        const subscriptionType = $('#subscriptionType').val();
        
        // Tarifs d'abonnement Tempo - récupérés depuis market.js
        const subscriptionPricesTempo = {};
        edfTempo.subscriptions.forEach(sub => {
            subscriptionPricesTempo[sub.kva.toString()] = sub.monthlyCost;
        });
        
        // Calculer le nombre de mois dans les données
        const monthsSet = new Set();
        data.forEach(day => {
            const parts = day.date.split('/');
            if (parts.length === 3) {
                const monthKey = `${parts[2]}-${parts[1]}`;
                monthsSet.add(monthKey);
            }
        });
        const numberOfMonths = monthsSet.size;
        
        // Calculer le coût de l'abonnement Tempo
        const subscriptionCost = subscriptionPricesTempo[subscriptionType] * numberOfMonths;
        
        // Calculer le coût total (consommation + abonnement)
        const totalCost = consumptionCost + subscriptionCost;
        
        // Afficher les cartes de résumé
        $('#totalConsumption').text(Math.round(totalConsumption) + ' kWh');
        const costPerMonthTempo = numberOfMonths > 0 ? (totalCost / numberOfMonths) : 0;
        $('#totalCost').html(totalCost.toFixed(2) + ' € <span style="font-size: 0.6em; opacity: 0.85;">(' + costPerMonthTempo.toFixed(2) + ' €/mois)</span>');
        
        // Afficher les détails par couleur et période (6 valeurs)
        $('#bleuHPTotal').text(Math.round(totals.bleuHP) + ' kWh');
        $('#bleuHCTotal').text(Math.round(totals.bleuHC) + ' kWh');
        $('#blancHPTotal').text(Math.round(totals.blancHP) + ' kWh');
        $('#blancHCTotal').text(Math.round(totals.blancHC) + ' kWh');
        $('#rougeHPTotal').text(Math.round(totals.rougeHP) + ' kWh');
        $('#rougeHCTotal').text(Math.round(totals.rougeHC) + ' kWh');
        
        // Afficher les coûts par catégorie avec pourcentages
        const bleuHPPercent = totalCost > 0 ? ((costs.bleuHP / totalCost) * 100).toFixed(1) : 0;
        const bleuHCPercent = totalCost > 0 ? ((costs.bleuHC / totalCost) * 100).toFixed(1) : 0;
        const blancHPPercent = totalCost > 0 ? ((costs.blancHP / totalCost) * 100).toFixed(1) : 0;
        const blancHCPercent = totalCost > 0 ? ((costs.blancHC / totalCost) * 100).toFixed(1) : 0;
        const rougeHPPercent = totalCost > 0 ? ((costs.rougeHP / totalCost) * 100).toFixed(1) : 0;
        const rougeHCPercent = totalCost > 0 ? ((costs.rougeHC / totalCost) * 100).toFixed(1) : 0;
        
        $('#bleuHPCost').text(costs.bleuHP.toFixed(2) + ' € (' + bleuHPPercent + '%)');
        $('#bleuHCCost').text(costs.bleuHC.toFixed(2) + ' € (' + bleuHCPercent + '%)');
        $('#blancHPCost').text(costs.blancHP.toFixed(2) + ' € (' + blancHPPercent + '%)');
        $('#blancHCCost').text(costs.blancHC.toFixed(2) + ' € (' + blancHCPercent + '%)');
        $('#rougeHPCost').text(costs.rougeHP.toFixed(2) + ' € (' + rougeHPPercent + '%)');
        $('#rougeHCCost').text(costs.rougeHC.toFixed(2) + ' € (' + rougeHCPercent + '%)');
        
        // Supprimer l'ancienne ligne d'abonnement si elle existe
        $('#subscriptionCostLine').remove();
        
        // Ajouter une ligne pour l'abonnement dans la tuile de facture
        const subscriptionPercent = totalCost > 0 ? ((subscriptionCost / totalCost) * 100).toFixed(1) : 0;
        const subscriptionLine = `
            <div id="subscriptionCostLine" class="detail-item" style="border-top: 1px solid rgba(255, 255, 255, 0.3); margin-top: 10px; padding-top: 10px;">
                <span class="detail-label">📅 Abonnement ${subscriptionType} kVA (${subscriptionPricesTempo[subscriptionType].toFixed(2)} € × ${numberOfMonths} mois):</span>
                <span class="detail-value">${subscriptionCost.toFixed(2)} € (${subscriptionPercent}%)</span>
            </div>
        `;
        
        // Insérer la ligne d'abonnement après la dernière ligne de coût
        $('#rougeHCCost').parent().parent().append(subscriptionLine);
        
        // Calculer les totaux HP et HC (DOIT être fait AVANT la simulation)
        const totalHP = totals.bleuHP + totals.blancHP + totals.rougeHP;
        const totalHC = totals.bleuHC + totals.blancHC + totals.rougeHC;
        const totalHPHC = totalHP + totalHC;
        
        
        // Afficher la tuile de résumé HP/HC
        $('#hpSummary').text(Math.round(totalHP) + ' kWh');
        $('#hcSummary').text(Math.round(totalHC) + ' kWh');
        $('#hpPercent').text(hpPercent + '%');
        $('#hcPercent').text(hcPercent + '%');
        
        // Afficher le tableau comparatif du marché et la meilleure offre
        displayMarketComparison(totalHP, totalHC, totalCost, numberOfMonths);
        
        // Créer les graphiques en camembert
        createPeriodPieChart(totals);
        createHpHcPieChart(totalHP, totalHC);
        
        // Créer l'histogramme mensuel
        createMonthlyBarChart(data);
    }
    
    function createMonthlyBarChart(data) {
        const ctx = document.getElementById('monthlyBarChart').getContext('2d');
        
        if (monthlyBarChart) {
            monthlyBarChart.destroy();
        }
        
        // Calculer les données mensuelles
        const monthlyData = {};
        
        data.forEach(day => {
            const parts = day.date.split('/');
            if (parts.length === 3) {
                const month = parts[1]; // Mois (01-12)
                const year = parts[2];  // Année
                const monthKey = `${year}-${month}`;
                
                if (!monthlyData[monthKey]) {
                    monthlyData[monthKey] = {
                        bleuHP: 0,
                        bleuHC: 0,
                        blancHP: 0,
                        blancHC: 0,
                        rougeHP: 0,
                        rougeHC: 0
                    };
                }
                
                monthlyData[monthKey].bleuHP += day.bleuHP;
                monthlyData[monthKey].bleuHC += day.bleuHC;
                monthlyData[monthKey].blancHP += day.blancHP;
                monthlyData[monthKey].blancHC += day.blancHC;
                monthlyData[monthKey].rougeHP += day.rougeHP;
                monthlyData[monthKey].rougeHC += day.rougeHC;
            }
        });
        
        // Trier les mois par ordre chronologique
        const sortedMonths = Object.keys(monthlyData).sort();
        
        // Préparer les labels (noms des mois)
        const monthNames = ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'Août', 'Sep', 'Oct', 'Nov', 'Déc'];
        const labels = sortedMonths.map(monthKey => {
            const parts = monthKey.split('-');
            const monthIndex = parseInt(parts[1]) - 1;
            return monthNames[monthIndex] + ' ' + parts[0];
        });
        
        // Préparer les datasets pour chaque catégorie
        const datasets = [
            {
                label: 'Bleu HP',
                data: sortedMonths.map(m => monthlyData[m].bleuHP),
                backgroundColor: 'rgba(0, 102, 204, 0.8)',
                borderColor: 'rgba(0, 102, 204, 1)',
                borderWidth: 1
            },
            {
                label: 'Bleu HC',
                data: sortedMonths.map(m => monthlyData[m].bleuHC),
                backgroundColor: 'rgba(102, 178, 255, 0.8)',
                borderColor: 'rgba(102, 178, 255, 1)',
                borderWidth: 1
            },
            {
                label: 'Blanc HP',
                data: sortedMonths.map(m => monthlyData[m].blancHP),
                backgroundColor: 'rgba(128, 128, 128, 0.8)',
                borderColor: 'rgba(128, 128, 128, 1)',
                borderWidth: 1
            },
            {
                label: 'Blanc HC',
                data: sortedMonths.map(m => monthlyData[m].blancHC),
                backgroundColor: 'rgba(192, 192, 192, 0.8)',
                borderColor: 'rgba(192, 192, 192, 1)',
                borderWidth: 1
            },
            {
                label: 'Rouge HP',
                data: sortedMonths.map(m => monthlyData[m].rougeHP),
                backgroundColor: 'rgba(220, 53, 69, 0.8)',
                borderColor: 'rgba(220, 53, 69, 1)',
                borderWidth: 1
            },
            {
                label: 'Rouge HC',
                data: sortedMonths.map(m => monthlyData[m].rougeHC),
                backgroundColor: 'rgba(255, 153, 153, 0.8)',
                borderColor: 'rgba(255, 153, 153, 1)',
                borderWidth: 1
            }
        ];
        
        monthlyBarChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: datasets
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                plugins: {
                    legend: {
                        position: 'bottom'
                    },
                    title: {
                        display: true,
                        text: 'Consommation Mensuelle par Catégorie'
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                const label = context.dataset.label || '';
                                const value = context.parsed.y || 0;
                                return label + ': ' + Math.round(value) + ' kWh';
                            }
                        }
                    }
                },
                scales: {
                    x: {
                        stacked: true,
                        title: {
                            display: true,
                            text: 'Mois'
                        }
                    },
                    y: {
                        stacked: true,
                        title: {
                            display: true,
                            text: 'Consommation (kWh)'
                        },
                        beginAtZero: true
                    }
                }
            }
        });
    }

    function createPeriodPieChart(totals) {
        const ctx = document.getElementById('periodPieChart').getContext('2d');
        
        if (periodPieChart) {
            periodPieChart.destroy();
        }
        
        periodPieChart = new Chart(ctx, {
            type: 'pie',
            data: {
                labels: [
                    'Bleu HP',
                    'Bleu HC',
                    'Blanc HP',
                    'Blanc HC',
                    'Rouge HP',
                    'Rouge HC'
                ],
                datasets: [{
                    data: [
                        totals.bleuHP,
                        totals.bleuHC,
                        totals.blancHP,
                        totals.blancHC,
                        totals.rougeHP,
                        totals.rougeHC
                    ],
                    backgroundColor: [
                        'rgba(0, 102, 204, 0.8)',      // Bleu HP
                        'rgba(102, 178, 255, 0.8)',    // Bleu HC
                        'rgba(128, 128, 128, 0.8)',    // Blanc HP
                        'rgba(192, 192, 192, 0.8)',    // Blanc HC
                        'rgba(220, 53, 69, 0.8)',      // Rouge HP
                        'rgba(255, 153, 153, 0.8)'     // Rouge HC
                    ],
                    borderColor: [
                        'rgba(0, 102, 204, 1)',
                        'rgba(102, 178, 255, 1)',
                        'rgba(128, 128, 128, 1)',
                        'rgba(192, 192, 192, 1)',
                        'rgba(220, 53, 69, 1)',
                        'rgba(255, 153, 153, 1)'
                    ],
                    borderWidth: 2
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                plugins: {
                    legend: {
                        position: 'bottom'
                    },
                    title: {
                        display: true,
                        text: 'Répartition Détaillée par Couleur et Période'
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                const label = context.label || '';
                                const value = context.parsed || 0;
                                const total = context.dataset.data.reduce((a, b) => a + b, 0);
                                const percentage = ((value / total) * 100).toFixed(1);
                                return label + ': ' + Math.round(value) + ' kWh (' + percentage + '%)';
                            }
                        }
                    }
                }
            }
        });
    }

    function createHpHcPieChart(totalHP, totalHC) {
        const ctx = document.getElementById('hpHcPieChart').getContext('2d');
        
        if (hpHcPieChart) {
            hpHcPieChart.destroy();
        }
        
        hpHcPieChart = new Chart(ctx, {
            type: 'pie',
            data: {
                labels: ['Heures Pleines', 'Heures Creuses'],
                datasets: [{
                    data: [totalHP, totalHC],
                    backgroundColor: [
                        'rgba(255, 159, 64, 0.8)',
                        'rgba(75, 192, 192, 0.8)'
                    ],
                    borderColor: [
                        'rgba(255, 159, 64, 1)',
                        'rgba(75, 192, 192, 1)'
                    ],
                    borderWidth: 2
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                plugins: {
                    legend: {
                        position: 'bottom'
                    },
                    title: {
                        display: true,
                        text: 'Répartition HP / HC'
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                const label = context.label || '';
                                const value = context.parsed || 0;
                                const total = context.dataset.data.reduce((a, b) => a + b, 0);
                                const percentage = ((value / total) * 100).toFixed(1);
                                return label + ': ' + Math.round(value) + ' kWh (' + percentage + '%)';
                            }
                        }
                    }
                }
            }
        });
    }

    function displayMarketComparison(totalHP, totalHC, totalCostTempo, numberOfMonths) {
        const subscriptionType = $('#subscriptionType').val();
        const $tableBody = $('#comparisonTableBody');
        const $localTableBody = $('#localComparisonTableBody');
        $tableBody.empty();
        $localTableBody.empty();
        
        // Tableau pour stocker toutes les offres avec leur coût total
        const allOffersWithCost = [];
        const localOffersWithCost = [];
        
        // Ajouter Tempo uniquement pour la comparaison de la meilleure offre
        const tempoOffer = {
            provider: 'EDF',
            offerName: 'EDF Tempo',
            totalCost: totalCostTempo,
            isTempo: true
        };
        
        // Parcourir toutes les offres du marché
        marketOffers.forEach(offer => {
            // Trouver l'abonnement correspondant au kVA sélectionné
            const subscription = offer.subscriptions.find(sub => sub.kva.toString() === subscriptionType);
            
            if (!subscription) return; // Passer si l'abonnement n'existe pas pour cette offre
            
            // Calculer le coût de l'abonnement
            const subscriptionCost = subscription.monthlyCost * numberOfMonths;
            
            // Calculer le coût de consommation selon le type de tarif
            let consumptionCost = 0;
            let calculationDetails = '';
            let tariffInfo = '';
            
            if (offer.tariff.hp && offer.tariff.hc) {
                // Tarif HP/HC
                const hpCost = totalHP * offer.tariff.hp;
                const hcCost = totalHC * offer.tariff.hc;
                consumptionCost = hpCost + hcCost;
                
                calculationDetails = `<div class="calculation-details">
                    <div><strong>Consommation:</strong></div>
                    <div>HP: ${Math.round(totalHP)} kWh × ${offer.tariff.hp.toFixed(5)} € = ${hpCost.toFixed(2)} €</div>
                    <div>HC: ${Math.round(totalHC)} kWh × ${offer.tariff.hc.toFixed(5)} € = ${hcCost.toFixed(2)} €</div>
                    <div><strong>Abonnement:</strong></div>
                    <div>${subscription.monthlyCost.toFixed(2)} € × ${numberOfMonths} mois = ${subscriptionCost.toFixed(2)} €</div>
                </div>`;
            }
            
            // Calculer le coût total
            const totalCost = consumptionCost + subscriptionCost;
            
            // Calculer la différence avec Tempo
            const difference = totalCost - totalCostTempo;
            const percentageDiff = totalCostTempo > 0 ? ((difference / totalCostTempo) * 100).toFixed(1) : 0;
            
            // Déterminer si c'est avantageux
            let advantageBadge = '';
            let differenceText = '';
            
            if (difference < 0) {
                // Cette offre est moins chère que Tempo
                advantageBadge = '<span class="advantage-badge advantageous">✓ Meilleure</span>';
                differenceText = `<span style="color: #28a745; font-weight: 700;">-${Math.abs(difference).toFixed(2)} € (${Math.abs(percentageDiff)}%)</span>`;
            } else if (difference > 0) {
                // Tempo est moins cher
                advantageBadge = '<span class="advantage-badge disadvantageous">✗ Plus chère</span>';
                differenceText = `<span style="color: #dc3545; font-weight: 700;">+${difference.toFixed(2)} € (+${percentageDiff}%)</span>`;
            } else {
                // Égalité
                advantageBadge = '<span class="advantage-badge neutral">= Équivalent</span>';
                differenceText = '<span style="color: #6c757d; font-weight: 700;">0,00 €</span>';
            }
            
            // Créer les informations de l'offre avec abonnement et tarifs
            const offerInfo = `
                <div><strong>${offer.offer}</strong></div>
                <div style="font-size: 0.85em; color: #666; margin-top: 5px;">
                    <div>Abonnement: ${subscription.monthlyCost.toFixed(2)} €/mois</div>
                    <div>HP: ${offer.tariff.hp.toFixed(5)} €/kWh | HC: ${offer.tariff.hc.toFixed(5)} €/kWh</div>
                </div>
            `;
            
            // Stocker l'offre avec toutes ses informations
            const offerData = {
                provider: offer.provider,
                offerInfo: offerInfo,
                calculationDetails: calculationDetails,
                totalCost: totalCost,
                differenceText: differenceText,
                offerName: `${offer.provider} - ${offer.offer}`,
                isTempo: false
            };
            
            // Vérifier si c'est une offre locale
            if (offer.isLocal) {
                localOffersWithCost.push(offerData);
            } else {
                allOffersWithCost.push(offerData);
            }
        });
        
        // Trier les offres par coût total croissant
        allOffersWithCost.sort((a, b) => a.totalCost - b.totalCost);
        localOffersWithCost.sort((a, b) => a.totalCost - b.totalCost);
        
        // Comparer Tempo avec toutes les offres pour déterminer la meilleure
        const allOffersIncludingTempo = [tempoOffer, ...allOffersWithCost];
        allOffersIncludingTempo.sort((a, b) => a.totalCost - b.totalCost);
        
        // Afficher la tuile de la meilleure offre
        if (allOffersIncludingTempo.length > 0) {
            const bestOffer = allOffersIncludingTempo[0];
            
            const summaryElement = $('#bestOfferSummary');
            summaryElement.removeClass('advantageous disadvantageous');
            
            if (bestOffer.isTempo) {
                // Tempo est la meilleure offre
                summaryElement.addClass('advantageous');
                $('#bestOfferIcon').text('🏆');
                $('#bestOfferTitle').text('Meilleure Offre pour Vous');
                $('#bestOfferMessage').text('Votre formule Tempo est la plus avantageuse pour votre profil de consommation !');
                $('#bestOfferName').text('EDF Tempo');
            } else {
                // Une autre offre est meilleure
                summaryElement.addClass('disadvantageous');
                $('#bestOfferIcon').text('💡');
                $('#bestOfferTitle').text('Meilleure Offre pour Vous');
                $('#bestOfferMessage').text('Une offre moins chère que Tempo existe pour votre profil de consommation.');
                $('#bestOfferName').text(bestOffer.offerName);
            }
            
            $('#bestOfferSummary').show();
        }
        
        // Générer les lignes du tableau dans l'ordre trié
        allOffersWithCost.forEach(offerData => {
            const row = `
                <tr>
                    <td><strong>${offerData.provider}</strong></td>
                    <td>${offerData.offerInfo}</td>
                    <td>${offerData.calculationDetails}</td>
                    <td><strong>${offerData.totalCost.toFixed(2)} €</strong></td>
                    <td>${offerData.differenceText}</td>
                </tr>
            `;
            
            $tableBody.append(row);
        });
        
        // Générer les lignes du tableau local
        localOffersWithCost.forEach(offerData => {
            const row = `
                <tr>
                    <td><strong>${offerData.provider}</strong></td>
                    <td>${offerData.offerInfo}</td>
                    <td>${offerData.calculationDetails}</td>
                    <td><strong>${offerData.totalCost.toFixed(2)} €</strong></td>
                    <td>${offerData.differenceText}</td>
                </tr>
            `;
            
            $localTableBody.append(row);
        });
        
        // Afficher les tableaux
        $('#marketComparison').show();
        
        // Afficher le tableau local seulement s'il y a des offres locales
        if (localOffersWithCost.length > 0) {
            $('#localComparison').show();
        } else {
            $('#localComparison').hide();
        }
    }

    function displayComparisonSummary(totalCostTempo, totalCostBleu) {
        // Calculer la différence
        const difference = totalCostBleu - totalCostTempo;
        const percentageDiff = totalCostBleu > 0 ? ((difference / totalCostBleu) * 100).toFixed(1) : 0;
        
        // Afficher le résumé
        $('#comparisonSummary').show();
        $('#comparisonTempo').text(totalCostTempo.toFixed(2) + ' €');
        $('#comparisonBleu').text(totalCostBleu.toFixed(2) + ' €');
        
        // Déterminer si Tempo est avantageux
        const summaryElement = $('#comparisonSummary');
        summaryElement.removeClass('advantageous disadvantageous');
        
        if (difference > 0) {
            // Tempo est avantageux (économie)
            summaryElement.addClass('advantageous');
            $('#comparisonIcon').text('✅');
            $('#comparisonTitle').text('Tempo est avantageux !');
            $('#comparisonMessage').text(
                `Vous économisez ${Math.abs(difference).toFixed(2)} € par an avec le tarif Tempo, soit ${Math.abs(percentageDiff)}% de moins que le tarif Bleu HP/HC.`
            );
            $('#savingsLabel').text('Économie annuelle :');
            $('#savingsValue').text(Math.abs(difference).toFixed(2) + ' €').css('color', '#28a745');
        } else if (difference < 0) {
            // Tempo est désavantageux (surcoût)
            summaryElement.addClass('disadvantageous');
            $('#comparisonIcon').text('⚠️');
            $('#comparisonTitle').text('Tempo est désavantageux');
            $('#comparisonMessage').text(
                `Vous payez ${Math.abs(difference).toFixed(2)} € de plus par an avec le tarif Tempo, soit ${Math.abs(percentageDiff)}% de plus que le tarif Bleu HP/HC.`
            );
            $('#savingsLabel').text('Surcoût annuel :');
            $('#savingsValue').text('+ ' + Math.abs(difference).toFixed(2) + ' €').css('color', '#dc3545');
        } else {
            // Égalité (cas rare)
            $('#comparisonIcon').text('➖');
            $('#comparisonTitle').text('Tarifs équivalents');
            $('#comparisonMessage').text(
                'Les deux tarifs sont équivalents pour votre consommation.'
            );
            $('#savingsLabel').text('Différence :');
            $('#savingsValue').text('0,00 €').css('color', '#667eea');
        }
    }

});
