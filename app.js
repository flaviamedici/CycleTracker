function validate() {
  const startDate = document.getElementById('start-date').value;
  const cycleLength = document.getElementById('cycle-length').value;
  const error = document.getElementById('error');

  // Check if start date and cycle length are selected
  if (!startDate || !cycleLength) {
    error.innerText = 'Please select a start date and cycle length.';
    return;
  }

  // Check if start date is valid
  const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
  if (!dateRegex.test(startDate)) {
    error.innerText = 'Please enter a valid date in the format YYYY-MM-DD.';
    return;
  }

    // Call calculateCyclePhase if validation is successful
    error.innerText = '';
    calculateCyclePhase();
  }


function calculateCyclePhase() {
    const startDate = new Date(document.getElementById('start-date').value);
    const currentDate = new Date();
    const cycleLength = parseInt(document.getElementById('cycle-length').value);
    const daysPassed = Math.floor((currentDate - startDate) / (1000 * 60 * 60 * 24));
    const cycleDay = (daysPassed % cycleLength) + 1;

    let phase;
    let exercises;
    let foods;
    let avoid;
    if (cycleDay <= 7) {
      phase = 'Menstrual Phase';
      exercises = 'walking, restorative yoga, stretching, body weight strength training';
      foods = 'soups, citrus foods, tumeric, beets, avocado, peas, broccoli, grapes';
      avoid = 'fried foods, alcohol, caffeine, staying up late';
    } else if (cycleDay > 7 && cycleDay <= 21) {
      phase = 'Follicular Phase';
      exercises = 'jogging, dancing, moderate weighlifting, resistance bands workout';
      foods = 'broccoli, leafy greens, avocado, green letils, olives, nut butter, trout';
      avoid = 'fried foods, processed foods, overconsuption of alcohol';
    } else if (cycleDay > 21 && cycleDay <= 22) {
      phase = 'Ovulatory Phase';
      exercises = 'HIIT workouts, bootcamps, cycling';
      foods = 'fats and protein, tuna, quinoa, bell peppers, corn, spinach, lentils';
      avoid = 'overstimulation (too much screen time)';
    } else {
      phase = 'Luteal Phase';
      exercises = 'walking, Stretching and Yoga';
      foods = 'higher protein, leafy greens, avocado, sweet potato, fish, eggs';
      avoid = 'dairy, alcohol, too much sugar, too much caffeine';
    }

    document.getElementById('cycle-phase').innerText = `You are currently in the ${phase}. 
    During this phase, the best exercises are ${exercises}.
    You should avoid ${avoid}.
    The best foods for you to eat are ${foods}`;
  }
