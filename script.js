        /**
        * Localization maping is located in the end of the code */
        
        // Objeto de internacionalização (i18n) que contém todas as strings de texto em português e inglês.
        const i18n = {
            // Português (pt)
            pt: {
                title: 'Seu Guia de Calistenia Interativo',
                subtitle: 'Explore os exercícios, acompanhe sua progressão e organize sua rotina.',
                localStorageInfo: 'Dados salvos localmente.',
                nav: {
                    principles: 'Princípios da Rotina',
                    routines: 'Rotinas de Exercícios',
                    levels: 'Progressão por Nível',
                    schedule: 'Organizando sua Semana',
                    database: 'Banco de Exercícios',
                    custom: 'Criar Rotina Personalizada'
                },
                status: {
                    saved: 'Rotina salva com sucesso!',
                    error: 'Erro ao salvar rotina.',
                    addedManual: 'Exercício adicionado manualmente.',
                    added: 'Adicionado:',
                    removed: 'Removido:',
                    nameRequired: 'Por favor, dê um nome à sua rotina.',
                    exercisesRequired: 'Adicione pelo menos um exercício à sua rotina.',
                    deleted: 'Rotina apagada com sucesso!'
                },
                principles: {
                    title: 'Entendendo as Propriedades do Treino',
                    reps: { title: 'Repetições (Reps)', description: 'O número de vezes que você executa um exercício específico. É o alicerce para construir volume de treino e resistência muscular. Por exemplo, 3 repetições de um agachamento.' },
                    sets: { title: 'Sets', description: 'Um grupo de repetições. Aumentar o número de sets é uma forma eficaz de progredir quando você já consegue fazer muitas repetições. Exemplo: 3 sets de 10 flexões, com descanso entre os sets.' },
                    tempo: { title: 'Tempo', description: "A velocidade e ritmo de cada fase de um exercício (ex: 2010). '2' segundos na descida, '0's de pausa, '1's na subida e '0's de pausa no topo. É fundamental para aprimorar a técnica e o controle muscular." },
                    rest: { title: 'Descanso (Rest)', description: 'O intervalo entre os sets. É crucial para a recuperação muscular e para manter a qualidade da execução dos próximos sets. O tempo de descanso varia de acordo com seu objetivo: mais curto para resistência, mais longo para força.' },
                    superset: { title: 'Superset', description: 'Uma sequência de dois ou mais exercícios realizados consecutivamente, sem descanso. Geralmente, combinam-se exercícios de grupos musculares opostos (ex: flexões e remadas) para otimizar o tempo e aumentar a intensidade.' },
                    time: { title: 'Tempo (isométrico)', description: 'A duração que você mantém uma posição estática. É a principal medida para exercícios isométricos, que fortalecem músculos e estabilizam articulações sem movimento, como na prancha ou na ponte.' }
                },

                routines: {
                    title: (label) => `${label} - Níveis de Progressão`,
                    chartLabel: (label) => `Progresso de ${label}`,
                    chartXAxis: 'Semanas',
                    chartYAxis: 'Repetições',
                    level: (level) => `Nível ${level}`
                },
                schedule: {
                    title: 'Organizando Sua Rotina Semanal',
                    stacking: {
                        title: 'Empilhando Rotinas (Stacking)',
                        description: 'Neste método, você trabalha sequencialmente cada nível escolhido de pull-up, push-up e squat. Por exemplo, se você selecionar o nível 2 de push-up, nível 3 de pull-up e nível 3 de squat, você completa todos os sets da rotina de push-up antes de passar para a próxima. Uma sessão de treino de força ideal leva cerca de 30 minutos.'
                    },
                    triplets: {
                        title: 'Agrupando em Triplets',
                        description: 'Para eficiência, este método envolve o treinamento de grupos musculares antagonistas. Você alterna exercícios de cada rotina. Por exemplo, um triplet consiste em um exercício de push-up, um de pull-up e um de squat. Este método reduz significativamente o tempo total de treino, pois o tempo de descanso para um grupo muscular ocorre enquanto você trabalha outro.'
                    },
                    oneDay: {
                        title: 'Rotina de Um Dia',
                        description: 'Este programa foca em dedicar cada dia a uma rotina específica, permitindo o treinamento direcionado duas vezes por semana com um dia de descanso entre eles. Por exemplo, treine push-ups na segunda-feira, pull-ups na terça, descanse na quarta e repita o ciclo. A desvantagem é que você só treinará cada rotina duas vezes por semana, mas é ótimo para agendas apertadas.'
                    }
                },
                database: {
                    title: 'Banco de Dados de Exercícios',
                    level: (level) => `Nível ${level}:`
                },
                custom: {
                    title: 'Criar Rotina Personalizada',
                    routineName: 'Nome da Rotina',
                    routinePlaceholder: 'Ex: Treino de Força',
                    selectedExercisesTitle: 'Exercícios na Rotina:',
                    noExercises: 'Nenhum exercício adicionado ainda.',
                    addFromDb: 'Adicionar do Banco de Dados',
                    addManual: 'Adicionar Manualmente',
                    addManualLabel: 'Adicionar Novo Exercício Manualmente',
                    addManualPlaceholder: 'Ex: Barra Fixa (3x8)',
                    addButton: 'Adicionar',
                    saveButton: 'Salvar Rotina',
                    savedRoutinesTitle: 'Minhas Rotinas Salvas',
                    loadingRoutines: 'Carregando rotinas salvas...',
                    noSavedRoutines: 'Nenhuma rotina salva ainda.',
                    deleteButton: 'Apagar'
                },
                modals: {
                    confirm: {
                        title: 'Confirmar Exclusão',
                        text: 'Tem certeza que deseja apagar esta rotina?',
                        no: 'Não',
                        yes: 'Sim, Apagar'
                    },
                    select: {
                        title: 'Selecionar Exercícios',
                        close: 'Fechar'
                    }
                },
                routinesData: {
                    pushups: {
                        label: 'Flexões (Push-ups)',
                        color: 'rgba(239, 68, 68, 0.6)',
                        levels: [
                            { level: 1, exercises: ['Flexões de Escápula (4x8)', 'Flexões Negativas (3x8)', 'Prancha (3x60s)'] },
                            { level: 2, exercises: ['Flexões Normais (3x12)', 'Flexões de Escápula (3x8)', 'Flexões Negativas (3x8)', 'Prancha (3x60s)'] },
                            { level: 3, exercises: ['Flexões Diamante (3x15)', 'Extensões de Tríceps (3x8)', 'Flexões Normais (4x8)'] },
                            { level: 4, exercises: ['Flexões Archer (3x2/braço)', 'Flexões Diamante (2x10)', 'Flexões Explosivas (2x8)', 'Prancha (3x60s)'] },
                            { level: 5, exercises: ['Flexões de Um Braço (3x1/braço)', 'Flexões Archer (3x4/braço)', 'Flexões Diamante (3x10)', 'Flexões Normais (3x8)', 'Flexões Abertas (3x8)'] }
                        ]
                    },
                    pullups: {
                        label: 'Barras Fixas (Pull-ups)',
                        color: 'rgba(59, 130, 246, 0.6)',
                        levels: [
                            { level: 1, exercises: ['Remada Invertida com Barra (3x15)', 'Susp. Passiva (3x60s)'] },
                            { level: 2, exercises: ['Remada Invertida (3x12)', 'Barras de Escápula (3x12)'] },
                            { level: 3, exercises: ['Barra Fixa com Elástico (3x6)', 'Remada Invertida (3x12)', 'Barras de Escápula (3x12)'] },
                            { level: 4, exercises: ['Barra Fixa Negativa (5x3)', 'Barra Fixa com Elástico (3x6)', 'Remada Invertida (3x8)', 'Barras de Escápula (3x8)'] },
                            { level: 5, exercises: ['Barra Fixa (3x5)', 'Barra Fixa com Elástico (3x10)', 'Remada Invertida (3x8)', 'Barras de Escápula (3x8)', 'Susp. Passiva (3x30s)'] }
                        ]
                    },
                    squats: {
                        label: 'Agachamentos (Squats)',
                        color: 'rgba(34, 197, 94, 0.6)',
                        levels: [
                            { level: 1, exercises: ['Agachamentos Profundos (3x12)', 'Agachamentos com Pés Juntos (3x12)', 'Agachamentos com Peso Corporal (3x15)'] },
                            { level: 2, exercises: ['Agachamento Búlgaro (3x10/perna)', 'Agachamentos Profundos (3x10)', 'Agachamentos com Pés Juntos (3x10)'] },
                            { level: 3, exercises: ['Agachamento Cossack (2x8/perna)', 'Agachamento Búlgaro (3x8/perna)', 'Agachamentos Profundos (3x8)'] },
                            { level: 4, exercises: ['Agachamento Pistol (Variantes Fáceis) (3x10/perna)', 'Agachamento Cossack (3x10/perna)', 'Agachamentos Profundos (3x10)'] },
                            { level: 5, exercises: ['Agachamento Pistol (3x3/perna)', 'Agachamento Pistol (Variantes Fáceis) (3x6/perna)', 'Agachamento Búlgaro (3x10/perna)', 'Agachamento Cossack (3x10/perna)', 'Agachamentos Profundos (3x10)'] }
                        ]
                    },
                    abs: {
                        label: 'Abdômen (Abs)',
                        color: 'rgba(255, 165, 0, 0.6)',
                        levels: [
                            { level: 1, exercises: ['Prancha (3x30s)', 'Elevação de Pernas Deitado (3x15)', 'Crunches (3x20)'] },
                            { level: 2, exercises: ['Prancha Lateral (3x30s/lado)', 'Mountain Climbers (3x30s)', 'Elevação de Pernas Pendurado (3x10)'] },
                            { level: 3, exercises: ['L-Sit (3x20s)', 'V-Ups (3x15)', 'Prancha com Toque nos Ombros (3x30s)'] },
                            { level: 4, exercises: ['Dragon Flag Negativo (3x5)', 'Prancha (3x90s)', 'Pernas na Barra Fixa (3x12)'] },
                            { level: 5, exercises: ['Dragon Flag (3x5)', 'L-Sit (3x60s)', 'Elevação de Pernas Pendurado com Rotação (3x15)'] }
                        ]
                    },
                    flexibility: {
                        label: 'Alongamentos (Flexibilidade)',
                        color: 'rgba(143, 43, 224, 0.6)',
                        levels: [
                            { level: 1, exercises: ['Alongamento de Gato-Vaca (3x10 rep) [Coluna e Abdômen]', 'Alongamento de Tronco deitado (3x45s/lado) [Lombar e Glúteos]', 'Alongamento de Quadril Borboleta (3x60s) [Virilha e Quadril]'] },
                            { level: 2, exercises: ['Alongamento de Peito (3x60s) [Peito e Ombros]', 'Alongamento de Ombro na parede (3x45s/lado) [Ombros e Peito]', 'Cachorro Olhando para Baixo (3x60s) [Posterior da Perna e Coluna]'] },
                            { level: 3, exercises: ['Pinça Sentada (3x60s) [Posterior da Perna e Coluna]', 'Ponte Completa (3x45s) [Peito e Ombros]', 'Alongamento de Perna deitada (3x60s/perna) [Posterior da Perna]'] },
                            { level: 4, exercises: ['Postura da Esfinge (3x60s) [Abdômen e Lombar]', 'Torção de Tronco Sentado (3x45s/lado) [Coluna e Quadril]', 'Alongamento Lateral em pé (3x45s/lado) [Tronco e Lombar]'] },
                            { level: 5, exercises: ['Postura da Cobra (3x60s) [Peito e Abdômen]', 'Alongamento de Joelhos na parede (3x60s) [Panturrilhas e Tendões]', 'Postura da Criança (3x60s) [Costas e Ombros]'] }
                        ]
                    }
                }
            },
            // English (en)
            en: {
                title: 'Your Interactive Calisthenics Guide',
                subtitle: 'Explore exercises, track your progress, and organize your routine.',
                localStorageInfo: 'Data saved locally.',
                nav: {
                    principles: 'Routine Principles',
                    routines: 'Exercise Routines',
                    levels: 'Level Progression',
                    schedule: 'Organize Your Week',
                    database: 'Exercise Database',
                    custom: 'Create Custom Routine'
                },
                status: {
                    saved: 'Routine saved successfully!',
                    error: 'Error saving routine.',
                    addedManual: 'Exercise added manually.',
                    added: 'Added:',
                    removed: 'Removed:',
                    nameRequired: 'Please name your routine.',
                    exercisesRequired: 'Add at least one exercise to your routine.',
                    deleted: 'Routine deleted successfully!'
                },
                principles: {
                    title: 'Understanding Training Properties',
                    reps: { title: 'Repetitions (Reps)', description: 'The number of times you perform a specific exercise. It is the foundation for building training volume and muscular endurance. For example, 3 repetitions of a squat.' },
                    sets: { title: 'Sets', description: 'A group of repetitions. Increasing the number of sets is an effective way to progress once you can perform many reps. Example: 3 sets of 10 push-ups, with rest in between sets.' },
                    tempo: { title: 'Tempo', description: "The speed and rhythm of each phase of an exercise (e.g., 2010). '2' seconds on the descent, '0's pause, '1's on the ascent, and '0's pause at the top. It is crucial for improving technique and muscular control." },
                    rest: { title: 'Rest', description: 'The interval between sets. It is crucial for muscle recovery and maintaining the quality of subsequent sets. Rest time varies depending on your goal: shorter for endurance, longer for strength.' },
                    superset: { title: 'Superset', description: 'A sequence of two or more exercises performed consecutively, with no rest. They often combine exercises for opposing muscle groups (e.g., push-ups and rows) to optimize time and increase intensity.' },
                    time: { title: 'Time (isometric)', description: 'The duration you hold a static position. It is the main measure for isometric exercises, which strengthen muscles and stabilize joints without movement, such as in a plank or bridge.' }
                },
                routines: {
                    title: (label) => `${label} - Progression Levels`,
                    chartLabel: (label) => `Progress of ${label}`,
                    chartXAxis: 'Weeks',
                    chartYAxis: 'Repetitions',
                    level: (level) => `Level ${level}`
                },
                schedule: {
                    title: 'Organizing Your Weekly Routine',
                    stacking: {
                        title: 'Stacking Routines',
                        description: 'In this method, you work sequentially on each chosen level of pull-up, push-up, and squat. For example, if you select level 2 for push-ups, level 3 for pull-ups, and level 3 for squats, you complete all sets of the push-up routine before moving to the next. An ideal strength training session takes about 30 minutes.'
                    },
                    triplets: {
                        title: 'Grouping into Triplets',
                        description: 'For efficiency, this method involves training antagonistic muscle groups. You alternate exercises from each routine. For example, a triplet consists of a push-up exercise, a pull-up, and a squat. This method significantly reduces total workout time, as rest for one muscle group occurs while you are working another.'
                    },
                    oneDay: {
                        title: 'One-Day Routine',
                        description: 'This program focuses on dedicating each day to a specific routine, allowing targeted training twice a week with a rest day in between. For example, train push-ups on Monday, pull-ups on Tuesday, rest on Wednesday, and repeat the cycle. The disadvantage is that you will only train each routine twice a week, but it is great for busy schedules.'
                    }
                },
                database: {
                    title: 'Exercise Database',
                    level: (level) => `Level ${level}:`
                },
                custom: {
                    title: 'Create Custom Routine',
                    routineName: 'Routine Name',
                    routinePlaceholder: 'Ex: Strength Training',
                    selectedExercisesTitle: 'Exercises in Routine:',
                    noExercises: 'No exercises added yet.',
                    addFromDb: 'Add from Database',
                    addManual: 'Add Manually',
                    addManualLabel: 'Add New Exercise Manually',
                    addManualPlaceholder: 'Ex: Pull-ups (3x8)',
                    addButton: 'Add',
                    saveButton: 'Save Routine',
                    savedRoutinesTitle: 'My Saved Routines',
                    loadingRoutines: 'Loading saved routines...',
                    noSavedRoutines: 'No routines saved yet.',
                    deleteButton: 'Delete'
                },
                modals: {
                    confirm: {
                        title: 'Confirm Deletion',
                        text: 'Are you sure you want to delete this routine?',
                        no: 'No',
                        yes: 'Yes, Delete'
                    },
                    select: {
                        title: 'Select Exercises',
                        close: 'Close'
                    }
                },
                routinesData: {
                    pushups: {
                        label: 'Push-ups',
                        color: 'rgba(239, 68, 68, 0.6)',
                        levels: [
                            { level: 1, exercises: ['Scapula Push-Ups (4x8)', 'Negative Push-Ups (3x8)', 'Plank Hold (3x60s)'] },
                            { level: 2, exercises: ['Normal Push-Ups (3x12)', 'Scapula Push-Ups (3x8)', 'Negative Push-Ups (3x8)', 'Plank Hold (3x60s)'] },
                            { level: 3, exercises: ['Diamond Push-Ups (3x15)', 'Triceps Extensions (3x8)', 'Normal Push-Ups (4x8)'] },
                            { level: 4, exercises: ['Archer Push-Ups (3x2/arm)', 'Diamond Push-Ups (2x10)', 'Explosive Push-Ups (2x8)', 'Plank Hold (3x60s)'] },
                            { level: 5, exercises: ['One-Arm Push-Ups (3x1/arm)', 'Archer Push-Ups (3x4/arm)', 'Diamond Push-Ups (3x10)', 'Normal Push-Ups (3x8)', 'Wide Push-Ups (3x8)'] }
                        ]
                    },
                    pullups: {
                        label: 'Pull-ups',
                        color: 'rgba(59, 130, 246, 0.6)',
                        levels: [
                            { level: 1, exercises: ['Bent Over Barbell Rows (3x15)', 'Passive Hang (3x60s)'] },
                            { level: 2, exercises: ['Australian Pull-Ups (3x12)', 'Scapula Pull-Ups (3x12)'] },
                            { level: 3, exercises: ['Band Assisted Pull-Ups (3x6)', 'Australian Pull-Ups (3x12)', 'Scapula Pull-Ups (3x12)'] },
                            { level: 4, exercises: ['Negative Pull-Ups (5x3)', 'Band Assisted Pull-Ups (3x6)', 'Australian Pull-Ups (3x8)', 'Scapula Pull-Ups (3x8)'] },
                            { level: 5, exercises: ['Pull-Ups (3x5)', 'Band Assisted Pull-Ups (3x10)', 'Australian Pull-Ups (3x8)', 'Scapula Pull-Ups (3x8)', 'Passive Hang (3x30s)'] }
                        ]
                    },
                    squats: {
                        label: 'Squats',
                        color: 'rgba(34, 197, 94, 0.6)',
                        levels: [
                            { level: 1, exercises: ['Deep Squats (3x12)', 'Narrow Stance Squats (3x12)', 'Bodyweight Squats (3x15)'] },
                            { level: 2, exercises: ['Bulgarian Split Squats (3x10/leg)', 'Deep Squats (3x10)', 'Narrow Stance Squats (3x10)'] },
                            { level: 3, exercises: ['Cossack Squats (2x8/leg)', 'Bulgarian Split Squats (3x8/leg)', 'Deep Squats (3x8)'] },
                            { level: 4, exercises: ['Pistol Squats Easier Variants (3x10/leg)', 'Cossack Squats (3x10/leg)', 'Deep Squats (3x10)'] },
                            { level: 5, exercises: ['Pistol Squats (3x3/leg)', 'Pistol Squats Easier Variants (3x6/leg)', 'Bulgarian Split Squats (3x10/leg)', 'Cossack Squats (3x10/leg)', 'Deep Squats (3x10)'] }
                        ]
                    },
                    abs: {
                        label: 'Abdomen (Abs)',
                        color: 'rgba(255, 165, 0, 0.6)',
                        levels: [
                            { level: 1, exercises: ['Prancha (3x30s)', 'Elevação de Pernas Deitado (3x15)', 'Crunches (3x20)'] },
                            { level: 2, exercises: ['Prancha Lateral (3x30s/lado)', 'Mountain Climbers (3x30s)', 'Elevação de Pernas Pendurado (3x10)'] },
                            { level: 3, exercises: ['L-Sit (3x20s)', 'V-Ups (3x15)', 'Prancha com Toque nos Ombros (3x30s)'] },
                            { level: 4, exercises: ['Dragon Flag Negativo (3x5)', 'Prancha (3x90s)', 'Pernas na Barra Fixa (3x12)'] },
                            { level: 5, exercises: ['Dragon Flag (3x5)', 'L-Sit (3x60s)', 'Elevação de Pernas Pendurado com Rotação (3x15)'] }
                        ]
                    },
                    flexibility: {
                        label: 'Flexibility',
                        color: 'rgba(143, 43, 224, 0.6)',
                        levels: [
                            { level: 1, exercises: ['Cat-Cow Stretch (3x10 rep) [Spine and Abs]', 'Lying Spinal Twist (3x45s/side) [Lower Back and Glutes]', 'Butterfly Hip Stretch (3x60s) [Groin and Hips]'] },
                            { level: 2, exercises: ['Chest Stretch (3x60s) [Chest and Shoulders]', 'Wall Shoulder Stretch (3x45s/side) [Shoulders and Chest]', 'Downward-Facing Dog (3x60s) [Hamstrings and Spine]'] },
                            { level: 3, exercises: ['Seated Forward Fold (3x60s) [Hamstrings and Spine]', 'Full Bridge (3x45s) [Chest and Shoulders]', 'Lying Hamstring Stretch (3x60s/leg) [Hamstrings]'] },
                            { level: 4, exercises: ['Sphinx Pose (3x60s) [Abs and Lower Back]', 'Seated Spinal Twist (3x45s/side) [Spine and Hips]', 'Standing Side Stretch (3x45s/side) [Torso and Lower Back]'] },
                            { level: 5, exercises: ['Cobra Pose (3x60s) [Chest and Abs]', 'Knees-to-Wall Stretch (3x60s) [Calves and Hamstrings]', 'Child\'s Pose (3x60s) [Back and Shoulders]'] }
                        ]
                    }
                }
            }
        };

        // Global state of the app
        const localStorageKey = 'calisthenics_routines'; // Key to store routines in Local Storage
        let customRoutines = []; // Array to store custom routines
        let exercisesInCustomRoutine = [];
        let currentLang = 'pt'; // Define o idioma padrão como português
        let langData = i18n[currentLang];

        // Get references to the element DOM 
        const navLinks = document.querySelectorAll('.nav-link'); 
        const routineTabs = document.querySelectorAll('.routine-tab');
        const contentSections = document.querySelectorAll('.content-section');
        const routineDetailsContainer = document.getElementById('routine-details');
        const levelsDetailsContainer = document.getElementById('levels-details');
        const chartCanvas = document.getElementById('progressChart');
        const saveRoutineBtn = document.getElementById('save-routine-btn');
        const savedRoutinesList = document.getElementById('saved-routines-list');
        const confirmModal = document.getElementById('confirm-modal');
        const confirmYesBtn = document.getElementById('confirm-yes-btn');
        const confirmNoBtn = document.getElementById('confirm-no-btn');
        const exerciseDatabaseList = document.getElementById('exercise-database-list');
        const addFromDbBtn = document.getElementById('add-from-db-btn');
        const addManualBtn = document.getElementById('add-manual-btn');
        const addManualConfirmBtn = document.getElementById('add-manual-confirm-btn');
        const manualInputSection = document.getElementById('exercise-input-section');
        const manualInput = document.getElementById('exercise-manual');
        const selectedExercisesList = document.getElementById('selected-exercises-list');
        const noExercisesMessage = document.getElementById('no-exercises-message');
        const exerciseSelectModal = document.getElementById('exercise-select-modal');
        const exerciseSelectionList = document.getElementById('exercise-selection-list');
        const closeSelectModalBtn = document.getElementById('close-select-modal-btn');
        const userInfoElement = document.getElementById('user-info');
        const statusMessageElement = document.getElementById('status-message');
        const langButtons = document.querySelectorAll('.lang-button');

        // Variables to the graphic and deletion handling 
        let progressChart;
        let routineToDeleteId = null;

        /**
         * Shows a temporary status message to the user.
         * @param {string} message The message to display.
         */
        function showStatusMessage(message) {
            statusMessageElement.textContent = message;
            statusMessageElement.classList.remove('hidden', 'animate-slide-out');
            statusMessageElement.classList.add('animate-slide-in');
            setTimeout(() => {
                statusMessageElement.classList.remove('animate-slide-in');
                statusMessageElement.classList.add('animate-slide-out');
                setTimeout(() => {
                    statusMessageElement.classList.add('hidden');
                }, 500);
            }, 3000);
        }

        /**
         * Loads custom routines from Local Storage.
         * @returns {Array} An array of saved routines.
         */
        function loadRoutines() {
            try {
                const routinesJSON = localStorage.getItem(localStorageKey);
                return routinesJSON ? JSON.parse(routinesJSON) : [];
            } catch (error) {
                console.error("Erro ao carregar rotinas do Local Storage:", error);
                return [];
            }
        }

        /**
         * Saves the current custom routines array to Local Storage.
         */
        function saveRoutines() {
            try {
                localStorage.setItem(localStorageKey, JSON.stringify(customRoutines));
                showStatusMessage(langData.status.saved);
            } catch (error) {
                console.error("Erro ao salvar rotinas no Local Storage:", error);
                showStatusMessage(langData.status.error);
            }
        }
        
        /**
         * Switches between main sections of the app.
         * @param {string} sectionId The ID of the section to display.
         */
        function switchSection(sectionId) {
            contentSections.forEach(section => {
                section.classList.toggle('hidden', section.id !== `${sectionId}-section`);
            });
            navLinks.forEach(link => {
                link.classList.toggle('tab-active', link.dataset.section === sectionId);
            });

            if (sectionId === 'routines') {
                switchRoutine('pushups');
            } else if (sectionId === 'levels') {
                renderAllLevels();
            } else if (sectionId === 'custom') {
                renderCustomRoutineForm();
                renderSavedRoutines(); // Reload saved routines from storage
            } else if (sectionId === 'exercise-database') {
                renderExerciseDatabase();
            }
        }

        /**
         * Switches between different routine tabs (e.g., Push-ups, Pull-ups).
         * @param {string} routineId The ID of the routine tab to display.
         */
        function switchRoutine(routineId) {
            routineTabs.forEach(tab => {
                tab.classList.toggle('tab-active', tab.dataset.routine === routineId);
            });
            renderRoutineDetails(routineId);
            updateChart(routineId);
        }

        /**
         * Renders the details of a specific routine with its levels and exercises.
         * @param {string} routineId The ID of the routine to render.
         */
        function renderRoutineDetails(routineId) {
            const routine = langData.routinesData[routineId];
            if (!routine) return;

            let html = `<h2 class="text-3xl font-bold text-center mb-6 text-gray-800">${langData.routines.title(routine.label)}</h2>`;
            html += '<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">';
            // Loop through each level and its exercises
            routine.levels.forEach(({ level, exercises }) => {
                html += `
                    <div class="level-card bg-white p-6 rounded-lg shadow-md border-l-4" style="border-color: ${routine.color};">
                        <h3 class="text-2xl font-semibold mb-4 text-gray-700">${langData.routines.level(level)}</h3>
                        <ul class="space-y-2">
                            ${exercises.map(ex => `<li class="text-gray-600">${ex}</li>`).join('')}
                        </ul>
                    </div>
                `;
            });

            html += '</div>';
            routineDetailsContainer.innerHTML = html;
        }

        /**
         * Renders all exercises consolidated by their level across all routines.
         */
        function renderAllLevels() {
            let html = `<h2 class="text-3xl font-bold text-center mb-6 text-gray-800">${langData.nav.levels}</h2>`;
            html += '<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">';
            
            for (let level = 1; level <= 5; level++) {
                const exercisesForLevel = [];
                for (const routineId in langData.routinesData) {
                    const routine = langData.routinesData[routineId];
                    const levelData = routine.levels.find(l => l.level === level);
                    if (levelData) {
                        levelData.exercises.forEach(exercise => {
                            exercisesForLevel.push({ name: exercise, routine: routine.label, color: routine.color });
                        });
                    }
                }
                html += `
                    <div class="level-card bg-white p-6 rounded-lg shadow-md">
                        <h3 class="text-2xl font-semibold mb-4 text-gray-700">${langData.routines.level(level)}</h3>
                        <ul class="space-y-2">
                            ${exercisesForLevel.map(ex => `<li class="text-gray-600"><span style="color: ${ex.color.replace('0.6', '1')};">●</span> ${ex.name} <span class="text-sm font-semibold text-gray-400">(${ex.routine})</span></li>`).join('')}
                        </ul>
                    </div>
                `;
            }

            html += '</div>';
            levelsDetailsContainer.innerHTML = html;
        }

        /**
         * Renders the full exercise database.
         */
        function renderExerciseDatabase() {
            let html = '';
            for (const routineId in langData.routinesData) {
                const routine = langData.routinesData[routineId];
                html += `<div class="bg-gray-100 p-4 rounded-lg">
                             <h3 class="text-xl font-bold text-gray-700 mb-2">${routine.label}</h3>
                             <ul class="space-y-1">`;
                routine.levels.forEach(({ level, exercises }) => {
                    exercises.forEach(exercise => {
                        html += `<li class="text-gray-600"><span class="font-semibold">${langData.database.level(level)}</span> ${exercise}</li>`;
                    });
                });
                html += `</ul></div>`;
            }
            exerciseDatabaseList.innerHTML = html;
        }

        /**
         * Renders the list of saved custom routines.
         */
        function renderSavedRoutines() {
    savedRoutinesList.innerHTML = '';

    if (customRoutines.length === 0) {
        savedRoutinesList.innerHTML = `<p class="text-center text-gray-500">${langData.custom.noSavedRoutines}</p>`;
        return;
    }

    customRoutines.forEach(routine => {
        const routineElement = document.createElement('div');
        routineElement.className = 'bg-white p-6 rounded-xl shadow-lg flex flex-col justify-between';
        routineElement.innerHTML = `
            <div>
                <h3 class="text-xl font-bold text-amber-700 mb-2">${routine.name}</h3>
                <ul class="space-y-1 text-gray-600">
                    ${routine.exercises.map(ex => `<li><i class="fas fa-dumbbell text-gray-400 mr-2"></i>${ex}</li>`).join('')}
                </ul>
            </div>
            <div class="mt-4 text-right">
                <button class="delete-routine-btn bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" data-id="${routine.id}">
                    <i class="fas fa-trash-alt mr-2"></i>${langData.custom.deleteButton}
                </button>
            </div>
        `;
        savedRoutinesList.appendChild(routineElement);
    });
}


        
        /**
         * Renders the custom routine creation form and sets up its state.
         */
       function renderCustomRoutineForm() {
    // Atualiza textos fixos
    document.getElementById('routine-name-label').textContent = langData.custom.routineName;
    document.getElementById('routine-name').placeholder = langData.custom.routinePlaceholder;
    document.getElementById('add-from-db-text').textContent = langData.custom.addFromDb;
    document.getElementById('add-manual-text').textContent = langData.custom.addManual;
    document.getElementById('add-manual-label').textContent = langData.custom.addManualLabel;
    document.getElementById('exercise-manual').placeholder = langData.custom.addManualPlaceholder;
    document.getElementById('add-manual-confirm-btn').textContent = langData.custom.addButton;
    document.getElementById('save-routine-btn').textContent = langData.custom.saveButton;
    document.getElementById('selected-exercises-title').textContent = langData.custom.selectedExercisesTitle;
    document.getElementById('saved-routines-title').textContent = langData.custom.savedRoutinesTitle;
    
    // Limpa objetos bugados do array
    exercisesInCustomRoutine = exercisesInCustomRoutine.filter(ex => {
    return typeof ex === 'string' && !ex.includes('[object Object]');
});

    // Renderiza a lista de exercícios selecionados
    const noExercisesMessage = document.getElementById('no-exercises-message');
    const container = document.getElementById('selected-exercises-list');

    // Remove todos os exercícios anteriores (exceto título e mensagem)
    const oldItems = container.querySelectorAll('.exercise-item');
    oldItems.forEach(item => item.remove());

    if (exercisesInCustomRoutine.length > 0) {
        noExercisesMessage.style.display = 'none';

        exercisesInCustomRoutine.forEach((exercise, index) => {
            const div = document.createElement('div');
            div.className = 'exercise-item flex items-center justify-between p-2 rounded-lg bg-gray-100';
            div.innerHTML = `
                <span class="text-gray-700">${typeof exercise === 'string' ? exercise : exercise.name || '[Exercício inválido]'}</span>
                <button class="remove-exercise-btn text-red-500 hover:text-red-700" data-index="${index}">
                    <i class="fas fa-times"></i>
                </button>
            `;
            container.appendChild(div);
        });
    } else {
        noExercisesMessage.textContent = langData.custom.noExercises;
        noExercisesMessage.style.display = 'block';
    }
}




        /**
         * Updates the Chart.js graph with new, simulated data for a given routine.
         * @param {string} routineId The ID of the routine to display in the chart.
         */
        function updateChart(routineId) {
            const routine = langData.routinesData[routineId];
            if (!routine) return;

            const labels = ['Semana 1', 'Semana 2', 'Semana 3', 'Semana 4', 'Semana 5'];
            const data = labels.map((_, i) => (i + 1) * Math.floor(Math.random() * (15 - 5 + 1) + 5));

            const chartData = {
                labels: labels,
                datasets: [{
                    label: langData.routines.chartLabel(routine.label),
                    data: data,
                    backgroundColor: routine.color.replace('0.6', '0.2'),
                    borderColor: routine.color.replace('0.6', '1'),
                    borderWidth: 2,
                    pointBackgroundColor: routine.color.replace('0.6', '1'),
                    tension: 0.4,
                    fill: true
                }]
            };

            const chartOptions = {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: langData.routines.chartYAxis,
                            color: '#4b5563'
                        },
                        ticks: {
                            color: '#6b7280'
                        }
                    },
                    x: {
                        title: {
                            display: true,
                            text: langData.routines.chartXAxis,
                            color: '#4b5563'
                        },
                        ticks: {
                            color: '#6b7280'
                        }
                    }
                },
                plugins: {
                    legend: {
                        labels: {
                            color: '#4b5563',
                            font: {
                                size: 14
                            }
                        }
                    },
                    tooltip: {
                        backgroundColor: 'rgba(0, 0, 0, 0.7)',
                        titleColor: '#fff',
                        bodyColor: '#fff'
                    }
                }
            };

            if (progressChart) {
                progressChart.data = chartData;
                progressChart.update();
            } else {
                progressChart = new Chart(chartCanvas, {
                    type: 'line',
                    data: chartData,
                    options: chartOptions
                });
            }
        }
        
        /**
         * Renders all exercises from the predefined routines into the selection modal.
         */
        function renderExerciseSelectionModal() {
            exerciseSelectionList.innerHTML = '';
            for (const routineId in langData.routinesData) {
                const routine = langData.routinesData[routineId];
                const header = document.createElement('div');
                header.className = 'expandable-header text-lg font-bold text-gray-700 flex justify-between items-center bg-gray-50 p-3 rounded-lg hover:bg-gray-100 transition-colors duration-200';
                header.innerHTML = `<span>${routine.label}</span><i class="fas fa-chevron-down text-sm transition-transform duration-200"></i>`;
                
                const list = document.createElement('ul');
                list.className = 'exercise-list space-y-2 mt-2 hidden';

                routine.levels.forEach(({ exercises }) => {
                    exercises.forEach(exercise => {
                        const isSelected = exercisesInCustomRoutine.includes(exercise);
                        const item = document.createElement('li');
                        item.className = `exercise-item p-2 rounded-lg cursor-pointer transition-colors duration-150 border border-transparent ${isSelected ? 'selected-exercise' : ''}`;
                        item.dataset.exercise = exercise;
                        item.innerHTML = `
                            <i class="far ${isSelected ? 'fa-check-circle' : 'fa-circle'} text-gray-400 mr-2"></i>
                            <span>${exercise}</span>
                        `;
                        list.appendChild(item);
                    });
                });
                
                exerciseSelectionList.appendChild(header);
                exerciseSelectionList.appendChild(list);
            }
        }

        /**
         * Function to update the entire UI based on the selected language.
         */
        function updateUI() {
            // Update global language data
            langData = i18n[currentLang];
            
            // Update static texts in the main UI
            document.getElementById('main-title').textContent = langData.title;
            document.getElementById('main-subtitle').textContent = langData.subtitle;
            document.getElementById('user-info').textContent = langData.localStorageInfo;

            // Update navigation links
            document.querySelector('[data-section="principles"]').textContent = langData.nav.principles;
            document.querySelector('[data-section="routines"]').textContent = langData.nav.routines;
            document.querySelector('[data-section="levels"]').textContent = langData.nav.levels;
            document.querySelector('[data-section="schedule"]').textContent = langData.nav.schedule;
            document.querySelector('[data-section="exercise-database"]').textContent = langData.nav.database;
            document.querySelector('[data-section="custom"]').textContent = langData.nav.custom;

            // Update routine tab texts
            document.querySelector('[data-routine="pushups"]').textContent = langData.routinesData.pushups.label;
            document.querySelector('[data-routine="pullups"]').textContent = langData.routinesData.pullups.label;
            document.querySelector('[data-routine="squats"]').textContent = langData.routinesData.squats.label;
            document.querySelector('[data-routine="abs"]').textContent = langData.routinesData.abs.label;
            document.querySelector('[data-routine="flexibility"]').textContent = langData.routinesData.flexibility.label;

            // Update principles section
            document.getElementById('principles-title').textContent = langData.principles.title;
            const principlesGrid = document.getElementById('principles-grid');
            principlesGrid.innerHTML = `
                <div class="bg-amber-50 p-6 rounded-xl">
                    <h3 class="text-xl font-bold text-amber-700 mb-2">${langData.principles.reps.title}</h3>
                    <p class="text-gray-600">${langData.principles.reps.description}</p>
                </div>
                <div class="bg-amber-50 p-6 rounded-xl">
                    <h3 class="text-xl font-bold text-amber-700 mb-2">${langData.principles.sets.title}</h3>
                    <p class="text-gray-600">${langData.principles.sets.description}</p>
                </div>
                <div class="bg-amber-50 p-6 rounded-xl">
                    <h3 class="text-xl font-bold text-amber-700 mb-2">${langData.principles.tempo.title}</h3>
                    <p class="text-gray-600">${langData.principles.tempo.description}</p>
                </div>
                <div class="bg-amber-50 p-6 rounded-xl">
                    <h3 class="text-xl font-bold text-amber-700 mb-2">${langData.principles.rest.title}</h3>
                    <p class="text-gray-600">${langData.principles.rest.description}</p>
                </div>
                <div class="bg-amber-50 p-6 rounded-xl">
                    <h3 class="text-xl font-bold text-amber-700 mb-2">${langData.principles.superset.title}</h3>
                    <p class="text-gray-600">${langData.principles.superset.description}</p>
                </div>
                <div class="bg-amber-50 p-6 rounded-xl">
                    <h3 class="text-xl font-bold text-amber-700 mb-2">${langData.principles.time.title}</h3>
                    <p class="text-gray-600">${langData.principles.time.description}</p>
                </div>
            `;
            
            // Update schedule section
            document.getElementById('schedule-title').textContent = langData.schedule.title;
            const scheduleGrid = document.getElementById('schedule-grid');
            scheduleGrid.innerHTML = `
                <div class="border border-gray-200 p-6 rounded-lg">
                    <h3 class="text-2xl font-semibold text-gray-700 mb-3">${langData.schedule.stacking.title}</h3>
                    <p class="text-gray-600 mb-4">${langData.schedule.stacking.description}</p>
                    <div class="flex space-x-2">
                        <span class="bg-red-200 text-red-800 px-3 py-1 rounded-full text-sm font-semibold">Push</span>
                        <span class="bg-blue-200 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">Pull</span>
                        <span class="bg-green-200 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">Squat</span>
                        <span class="bg-orange-200 text-orange-800 px-3 py-1 rounded-full text-sm font-semibold">Abs</span>
                        <span class="bg-orange-200 text-orange-800 px-3 py-1 rounded-full text-sm font-semibold">Flexibility</span>
                    </div>
                </div>
                <div class="border border-gray-200 p-6 rounded-lg">
                    <h3 class="text-2xl font-semibold text-gray-700 mb-3">${langData.schedule.triplets.title}</h3>
                    <p class="text-gray-600 mb-4">${langData.schedule.triplets.description}</p>
                    <div class="flex space-x-2">
                        <span class="bg-red-200 text-red-800 px-3 py-1 rounded-full text-sm font-semibold">Push</span>
                        <span class="bg-blue-200 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">Pull</span>
                        <span class="bg-green-200 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">Squat</span>
                        <span class="bg-orange-200 text-orange-800 px-3 py-1 rounded-full text-sm font-semibold">Abs</span>
                        <span class="bg-orange-200 text-orange-800 px-3 py-1 rounded-full text-sm font-semibold">Flexibility</span>
                    </div>
                </div>
                <div class="border border-gray-200 p-6 rounded-lg md:col-span-2">
                    <h3 class="text-2xl font-semibold text-gray-700 mb-3">${langData.schedule.oneDay.title}</h3>
                    <p class="text-gray-600">${langData.schedule.oneDay.description}</p>
                </div>
            `;

            // Update modal texts
            document.getElementById('confirm-modal-title').textContent = langData.modals.confirm.title;
            document.getElementById('confirm-modal-text').textContent = langData.modals.confirm.text;
            document.getElementById('confirm-no-btn').textContent = langData.modals.confirm.no;
            document.getElementById('confirm-yes-btn').textContent = langData.modals.confirm.yes;
            document.getElementById('select-modal-title').textContent = langData.modals.select.title;
            document.getElementById('close-select-modal-btn').textContent = langData.modals.select.close;

            // Re-render dynamic sections based on current view
            const activeSection = document.querySelector('.nav-link.tab-active');
            if (activeSection) {
                switchSection(activeSection.dataset.section);
            } else {
                switchSection('principles');
            }
        }

        // --- Event Listeners and Initial App Setup ---

        document.addEventListener('DOMContentLoaded', () => {
            customRoutines = loadRoutines();
            updateUI(); // Initial render with default language
        });

        // Event listeners for language buttons
        langButtons.forEach(button => {
            button.addEventListener('click', () => {
                const lang = button.id.split('-')[1];
                if (currentLang !== lang) {
                    currentLang = lang;
                    document.body.parentElement.lang = currentLang; // Update HTML lang attribute
                    updateUI(); // Re-render the entire UI
                }
            });
        });

        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                switchSection(link.dataset.section);
            });
        });

        routineTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                switchRoutine(tab.dataset.routine);
            });
        });

        // Toggle manual exercise input
        addManualBtn.addEventListener('click', () => {
            manualInputSection.classList.toggle('hidden');
        });

        // Add a manually entered exercise
        addManualConfirmBtn.addEventListener('click', () => {
            const exerciseName = manualInput.value.trim();
            if (exerciseName) {
                exercisesInCustomRoutine.push(exerciseName);
                manualInput.value = '';
                renderCustomRoutineForm();
                showStatusMessage(langData.status.addedManual);
            }
        });

        // Add exercises from the database via modal
        addFromDbBtn.addEventListener('click', () => {
            exerciseSelectModal.style.display = 'flex';
            renderExerciseSelectionModal();
        });

        // Close exercise selection modal
        closeSelectModalBtn.addEventListener('click', () => {
            exerciseSelectModal.style.display = 'none';
        });

        // Handle exercise selection in the modal
        exerciseSelectionList.addEventListener('click', (e) => {
            const item = e.target.closest('.exercise-item');
            if (item) {
                const exerciseName = item.dataset.exercise;
                if (!exercisesInCustomRoutine.includes(exerciseName)) {
                    exercisesInCustomRoutine.push(exerciseName);
                    item.classList.add('selected-exercise');
                    item.querySelector('i').classList.remove('fa-circle');
                    item.querySelector('i').classList.add('fa-check-circle');
                    showStatusMessage(`${langData.status.added} ${exerciseName}`);
                } else {
                    const index = exercisesInCustomRoutine.indexOf(exerciseName);
                    if (index > -1) {
                        exercisesInCustomRoutine.splice(index, 1);
                        console.log('Atualizado:', exercisesInCustomRoutine);
                        item.classList.remove('selected-exercise');
                        item.querySelector('i').classList.remove('fa-check-circle');
                        item.querySelector('i').classList.add('fa-circle');
                        showStatusMessage(`${langData.status.removed} ${exerciseName}`);
                    }
                }
                renderCustomRoutineForm();
            }
        });

        // Toggle expandable lists in the modal
        exerciseSelectionList.addEventListener('click', (e) => {
            const header = e.target.closest('.expandable-header');
            if (header) {
                const list = header.nextElementSibling;
                const icon = header.querySelector('i');
                list.classList.toggle('hidden');
                icon.classList.toggle('fa-chevron-down');
                icon.classList.toggle('fa-chevron-up');
            }
        });

        // Remove an exercise from the custom routine list
        selectedExercisesList.addEventListener('click', (e) => {
            const removeBtn = e.target.closest('.remove-exercise-btn');
            if (removeBtn) {
                const index = parseInt(removeBtn.dataset.index);
                exercisesInCustomRoutine.splice(index, 1);
                renderCustomRoutineForm();
                showStatusMessage(langData.status.removed.replace(':', '') + ".");
            }
        });

        // Save the custom routine
        saveRoutineBtn.addEventListener('click', () => {
    const routineNameInput = document.getElementById('routine-name');
    const routineName = routineNameInput.value.trim();

    if (!routineName) {
        showStatusMessage(langData.status.nameRequired);
        return;
    }
    if (exercisesInCustomRoutine.length === 0) {
        showStatusMessage(langData.status.exercisesRequired);
        return;
    }
    // Create a new routine object
    const newRoutine = {
        id: Date.now().toString(),
        name: routineName,
        exercises: [...exercisesInCustomRoutine]
    };

    customRoutines.push(newRoutine);
    saveRoutines(); // save in local store
    renderSavedRoutines(); // update the saved routines list

    // Enrase the form
    routineNameInput.value = '';
    exercisesInCustomRoutine = [];
    renderCustomRoutineForm(); // update creation section
});



        // Handle routine deletion confirmation
        savedRoutinesList.addEventListener('click', (e) => {
            const deleteBtn = e.target.closest('.delete-routine-btn');
            if (deleteBtn) {
                routineToDeleteId = deleteBtn.dataset.id;
                confirmModal.style.display = 'flex';
            }
        });

        confirmYesBtn.addEventListener('click', () => {
            if (routineToDeleteId) {
                customRoutines = customRoutines.filter(r => r.id !== routineToDeleteId);
                saveRoutines();
                renderSavedRoutines();
                confirmModal.style.display = 'none';
                showStatusMessage(langData.status.deleted);
                routineToDeleteId = null;
            }
        });

        confirmNoBtn.addEventListener('click', () => {
            confirmModal.style.display = 'none';
            routineToDeleteId = null;
        });
    document.getElementById('reset-all-btn').addEventListener('click', () => {
    routineToDeleteId = null; // Ensure that's not interfere with individual deletions

    const confirmReset = confirm('Tem certeza que deseja apagar TODAS as rotinas e exercícios? Essa ação não pode ser desfeita.');

    if (confirmReset) {
        // Clear all data
        localStorage.removeItem('calisthenics_routines');
        customRoutines = [];
        exercisesInCustomRoutine = [];

        // Update interface
        renderSavedRoutines();
        renderCustomRoutineForm();
        showStatusMessage('Tudo foi resetado com sucesso!');
    } else {
        showStatusMessage('Reset cancelado.');
    }
});

/** Aqui está um mapa de localização do código-fonte:

* Configuração e Dados Iniciais (Linhas 246 - 351)

  - Linhas 246-341: Objeto de internacionalização (i18n) com todo o texto da interface em português e inglês. Ele contém os títulos, descrições, rótulos de navegação, mensagens de status e todos os dados de rotinas e exercícios.

  - Linhas 342-345: Variáveis de estado global, como a chave de armazenamento local (localStorageKey), o array de rotinas personalizadas (customRoutines) e o idioma atual da aplicação.

  - Linhas 346-351: Referências a elementos do DOM (Document Object Model). Essas variáveis são usadas para manipular o HTML e interagir com a interface.

* Funções Principais (Linhas 353 - 440)

  - Linhas 353-356: A função showStatusMessage(message), que exibe uma mensagem temporária na tela usando um temporizador.

  - Linhas 357-362: Funções para salvar e carregar as rotinas personalizadas no localStorage do navegador.

  - Linhas 363-370: A função switchSection(sectionId), responsável por alternar a visualização entre as diferentes seções principais da aplicação (Princípios, Rotinas, etc.).

  - Linhas 371-380: As funções switchRoutine e renderRoutineDetails, que gerenciam a exibição das rotinas de exercícios pré-definidas e seus níveis.

  - Linhas 381-389: A função renderAllLevels, que compila e exibe todos os exercícios, agrupados por nível de dificuldade, de todas as rotinas.


  - Linhas 390-395: A função renderExerciseDatabase, que renderiza o banco de dados completo de exercícios.


  - Linhas 396-411: A função renderSavedRoutines e renderCustomRoutineForm, que controlam a visualização das rotinas salvas e o formulário para criação de novas rotinas.


  - Linhas 412-431: A função updateChart, que usa a biblioteca Chart.js para criar um gráfico de progresso com dados simulados para cada rotina.


  - Linhas 432-440: A função renderExerciseSelectionModal, que preenche o modal de seleção de exercícios com dados do banco de rotinas.

* Eventos e Inicialização (Linhas 441 - 490)

  - Linhas 441-464: A função updateUI, que é chamada para atualizar todo o texto da interface quando o idioma é alterado.

  - Linhas 465-490: Todos os event listeners que conectam as ações do usuário (cliques nos botões de idioma, navegação, salvar/excluir rotinas) às funções correspondentes para controlar a lógica da aplicação. */
