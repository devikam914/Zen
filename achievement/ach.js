let userPoints = 150;  // Sample user points

// Function to update progress
function updateProgress(achievementId, progressPercentage) {
    const achievementElement = document.getElementById(achievementId);
    const progressBar = achievementElement.querySelector('.progress');
    progressBar.style.width = progressPercentage + '%';

    // Unlock achievement if progress reaches 100%
    if (progressPercentage >= 100) {
        achievementElement.classList.remove('locked');
        achievementElement.querySelector('.badge').textContent = 'Unlocked';
        userPoints += parseInt(achievementElement.querySelector('.points').textContent.replace('Points', '').trim());
    }
}

// Function to unlock reward
function unlockReward(rewardId) {
    const rewardElement = document.getElementById('reward' + rewardId);
    if (userPoints >= 500) {  // Check if points are enough
        rewardElement.classList.remove('locked');
        rewardElement.querySelector('.reward-badge').textContent = 'Unlocked';
        rewardElement.querySelector('button').textContent = 'Use Now';
    } else {
        alert("Not enough points to unlock this reward!");
    }
}

// Function to use a reward
function useReward(rewardId) {
    alert('You have used the reward!');
    // Deduct points and update UI accordingly
    if (rewardId == 1) {
        userPoints -= 200;
    } else if (rewardId == 2) {
        userPoints -= 300;
    }
    console.log("Remaining points: " + userPoints);
}

// Example: updating achievements progress
updateProgress('achievement1', 100);  // Achievement 1: First task completed (100%)
updateProgress('achievement3', 70);   // Achievement 3: 7-day streak (70%)
updateProgress('achievement2', 40);   // Achievement 2: Complete 5 tasks (40%)
