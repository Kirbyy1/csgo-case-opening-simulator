const memeCoins = [
  {
    name: "Camo Coin",
    image: "images/trasparent coins/Camo_Coin-removebg-preview.webp",
    rarity: "common", // blue
    odds: 0.18,
    value: "91.780,43 €",
    gradient: "linear-gradient(90deg,#1a8cff 60%,#fff0)"
  },
  {
    name: "CH Coin",
    image: "images/trasparent coins/CH_Coin-removebg-preview.webp",
    rarity: "common", // blue
    odds: 0.18,
    status: "Launched",
    value: "91.780,43 €",
    gradient: "linear-gradient(90deg,#1a8cff 60%,#fff0)"
  },
  {
    name: "ChillGuy Coin",
    image: "images/trasparent coins/ChillGuy_Coin_-removebg-preview.webp",
    rarity: "common", // blue
    odds: 0.18,
    value: "91.780,43 €",
    gradient: "linear-gradient(90deg,#1a8cff 60%,#fff0)"
  },
  {
    name: "Dragon Coin",
    image: "images/trasparent coins/Dragon_Coin-removebg-preview.webp",
    rarity: "common", // blue
    odds: 0.18,
    status: "Launched",
    value: "91.780,43 €",
    gradient: "linear-gradient(90deg,#1a8cff 60%,#fff0)"
  },
  {
    name: "Fire Coin",
    image: "images/trasparent coins/Fire_Coin-removebg-preview.webp",
    rarity: "common", // blue
    odds: 0.18,
    value: "91.780,43 €",
    gradient: "linear-gradient(90deg,#1a8cff 60%,#fff0)"
  },
  {
    name: "Honey Coin",
    image: "images/trasparent coins/honey coin.webp",
    rarity: "common", // blue
    odds: 0.18,
    status: "Launched",
    value: "91.780,43 €",
    gradient: "linear-gradient(90deg,#1a8cff 60%,#fff0)"
  },
  {
    name: "Nasdaq Coin",
    image: "images/trasparent coins/Nasdaq.webp",
    rarity: "common", // blue
    odds: 0.18,
    value: "91.780,43 €",
    gradient: "linear-gradient(90deg,#1a8cff 60%,#fff0)"
  },
  {
    name: "Water Coin",
    image: "images/trasparent coins/Water_Coin-removebg-preview.webp",
    rarity: "common", // blue
    odds: 0.18,
    status: "Launched",
    value: "91.780,43 €",
    gradient: "linear-gradient(90deg,#1a8cff 60%,#fff0)"
  },
  {
    name: "Nightmare Coin",
    image: "images/trasparent coins/Nightmare_coin-removebg-preview.webp",
    rarity: "rare", // purple
    odds: 0.05,
    value: "91.780,43 €",
    gradient: "linear-gradient(90deg,hsl(279, 97%, 49%) 60%,#fff0)"
  },
  {
    name: "Pepe Coin",
    image: "images/trasparent coins/Pepe_Coin-removebg-preview.webp",
    rarity: "rare", // purple
    odds: 0.05,
    status: "Launched",
    value: "91.780,43 €",
    gradient: "linear-gradient(90deg,hsl(279, 97%, 49%) 60%,#fff0)"
  },
  {
    name: "Stonks Coin",
    image: "images/trasparent coins/Stonks_Coin-removebg-preview.webp",
    rarity: "epic", // pink
    odds: 0.03,
    value: "91.780,43 €",
    gradient: "linear-gradient(90deg,#d21dba 60%,#fff0)"
  },
  {
    name: "US Coin",
    image: "images/trasparent coins/US_Coin-removebg-preview.webp",
    rarity: "legendary", // red
    odds: 0.015,
    status: "Launched",
    value: "91.780,43 €",
    gradient: "linear-gradient(90deg,#ec2603 60%,#fff0)"
  },
  {
    name: "Bitcoin",
    image: "images/trasparent coins/bitcoin(xryso).webp",
    rarity: "mythical", // gold
    odds: 0.002,
    value: "91.780,43 €",
    gradient: "linear-gradient(90deg,#f8e117,#fff0)"
  }
];






function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}




// Pick winning coin based on odds
function pickCoinByOdds(coins) {
  const total = coins.reduce((sum, coin) => sum + coin.odds, 0);
  let rand = Math.random() * total;
  for (let coin of coins) {
    if (rand < coin.odds) return coin;
    rand -= coin.odds;
  }
  return coins[coins.length - 1]; 
}






function renderCarouselCardsWithArray(coinsArray, winningIndex) {
  const carousel = document.getElementById('carousel');
  carousel.innerHTML = '';
  
  coinsArray.forEach((coin, index) => {
    const card = document.createElement('div');
    card.className = 'case-card';
    
    if (index === winningIndex) {
      card.innerHTML = `
        <div class="center-line"></div>
        <img src="${coin.image}" alt="${coin.name}">
        <div class="rarity-fade" style="background: ${coin.gradient};"></div>
      `;
    } else {
      card.innerHTML = `
        <img src="${coin.image}" alt="${coin.name}">
        <div class="rarity-fade" style="background: ${coin.gradient};"></div>
      `;
    }
    
    carousel.appendChild(card);
  });
}




function animateCarouselToIndex(winningIndex, winningCoin) {
  const carousel = document.getElementById('carousel');
  if (!carousel) return;

  const cardWidth = 180;
  const centerOffset = window.innerWidth / 2;
  
  const finalPosition = -(winningIndex * cardWidth) + centerOffset - (cardWidth / 2);
  
  console.log('Winning index:', winningIndex, 'Final position:', finalPosition);
  
  carousel.style.transition = 'none';
  carousel.style.transform = 'translateX(800px)';
  
  setTimeout(() => {
    carousel.style.transition = 'transform 8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
    carousel.style.transform = `translateX(${finalPosition}px)`;
    
    setTimeout(() => {
      console.log('Animation finished, showing popup...');
      showWinningPopup(winningIndex, winningCoin);
    }, 8100);
    
  }, 200);
}








function startCarouselAnimation() {
  console.log('Animation started!');
  
  const cardWidth = 180;
  const screenWidth = window.innerWidth;
  const totalScrollDistance = screenWidth + 3000;
  const cardsNeeded = Math.ceil(totalScrollDistance / cardWidth) + 10;
  const centerLines = document.querySelectorAll('.center-line');
  centerLines.forEach(line => {
    line.style.display = 'block';
  });
  document.querySelector('.blur-vignette').style.display = 'block';
  console.log('Cards needed:', cardsNeeded);
  let extendedCoins = [];
  while (extendedCoins.length < cardsNeeded) {
    const shuffled = shuffleArray([...memeCoins]);
    extendedCoins.push(...shuffled);
  }
  

  const centerIndex = Math.floor(cardsNeeded * 0.6);
  

  const winningCoin = pickCoinByOdds(memeCoins);
  extendedCoins[centerIndex] = winningCoin;
  
  console.log('Winning coin:', winningCoin.name, 'placed at index:', centerIndex);
  

  const extraCardsAfter = 50;
  for (let i = 0; i < extraCardsAfter; i++) {
    const randomCoin = memeCoins[Math.floor(Math.random() * memeCoins.length)];
    extendedCoins.push(randomCoin);
  }
  
  currentExtendedCoins = extendedCoins;
  console.log('Total cards:', extendedCoins.length, 'Winning at:', centerIndex);
  renderCarouselCardsWithArray(extendedCoins, centerIndex);
  animateCarouselToCenter(centerIndex, winningCoin);
}





function animateCarouselToCenter(centerIndex, winningCoin) {
  const carousel = document.getElementById('carousel');
  if (!carousel) return;

  // Responsive card width based on screen size
  let cardWidth = 180;
  if (window.innerWidth <= 480) {
    cardWidth = 120; // Small mobile
  } else if (window.innerWidth <= 768) {
    cardWidth = 140; // Mobile
  } else if (window.innerWidth <= 1024) {
    cardWidth = 160; // Tablet
  }

  const screenCenter = window.innerWidth / 2;
  const finalPosition = -(centerIndex * cardWidth) + screenCenter - (cardWidth / 2);
  
  console.log('Center index:', centerIndex, 'Final position:', finalPosition, 'Card width:', cardWidth);
  
  carousel.style.transition = 'none';
  carousel.style.transform = 'translateX(800px)';
  
  setTimeout(() => {
    carousel.style.transition = 'transform 8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
    carousel.style.transform = `translateX(${finalPosition}px)`;
    
    // Start deceleration sound sequence
    startCardBasedDeceleratingSound(); // or use startDeceleratingCardSounds() for time-based
    
    setTimeout(() => {
      console.log('Animation finished, showing popup...');
      showWinningPopup(centerIndex, winningCoin);
    }, 8100);
  }, 200);
}






function showWinningPopup(winningIndex, winningCoin) {
  console.log('🎉 Won:', winningCoin.name, 'Rarity:', winningCoin.rarity, 'Value:', winningCoin.value);
  
  // Find which card is actually at the center after animation
  const carousel = document.getElementById('carousel');
  const cards = document.querySelectorAll('.case-card');
  const centerX = window.innerWidth / 2;
  
  let actualCenterCard = null;
  let actualCenterIndex = -1;
  let minDistance = Infinity;
  
  cards.forEach((card, index) => {
    const cardRect = card.getBoundingClientRect();
    const cardCenterX = cardRect.left + cardRect.width / 2;
    const distance = Math.abs(cardCenterX - centerX);
    
    if (distance < minDistance) {
      minDistance = distance;
      actualCenterCard = card;
      actualCenterIndex = index;
    }
  });
  
  console.log('Card actually at center:', actualCenterIndex, 'Distance:', minDistance);
  
  // Use the coin that's actually at the center
  const actualWinningCoin = currentExtendedCoins[actualCenterIndex];
  console.log('Actual winning coin:', actualWinningCoin.name);
  
  if (actualCenterCard) {
    highlightWinningCard(actualCenterCard);
  }
  
  // Phase 2: Blur background (300ms delay)
  setTimeout(() => {
    blurBackgroundAndDimOthers(actualCenterCard);
  }, 300);
  
  // Phase 3: Play reveal sound (1 second before popup - at 0ms delay)
  playRarityRevealSound(actualWinningCoin.rarity);
  
  // Phase 4: Show popup with winning coin (1000ms delay)
  setTimeout(() => {
    showPopupWithFadeIn(actualWinningCoin);
  }, 1000);
  
  // Phase 5: Show button (1400ms delay)
  setTimeout(() => {
    showInteractiveButtons();
  }, 1400);
}





function highlightWinningCard(card) {
  // Hide all center lines
  const centerLines = document.querySelectorAll('.center-line');
  centerLines.forEach(line => {
    line.style.display = 'none';
  });
  
  if (card) {
    // Start continuous pulsing animation
    card.style.transition = 'transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1), z-index 0.8s, filter 0.8s';
    card.style.transform = 'scale(1.2) translateY(-30px)';
    card.style.zIndex = '50';
    card.style.filter = 'brightness(1.2) drop-shadow(0 8px 24px rgba(255,255,255,0.3))';
    
    // Add pulsing animation class
    card.classList.add('winning-card-pulse');
    
    // Store reference for later cleanup
    window.currentWinningCard = card;
  }
}

// New function to stop all animations when popup appears
function stopWinningCardAnimation() {
  if (window.currentWinningCard) {
    const card = window.currentWinningCard;
    
    // Remove pulsing animation
    card.classList.remove('winning-card-pulse');
    
    // Reset all transforms and styles
    card.style.transition = 'all 0.3s ease';
    card.style.transform = 'scale(1) translateY(0)';
    card.style.zIndex = '1';
    card.style.filter = 'none';
    
    // Clear the reference
    window.currentWinningCard = null;
  }
  
  // Also reset any other animated cards
  const allCards = document.querySelectorAll('.case-card');
  allCards.forEach(card => {
    card.classList.remove('winning-card-pulse');
    card.style.transition = 'all 0.3s ease';
    card.style.transform = 'scale(1) translateY(0)';
    card.style.zIndex = '1';
    card.style.filter = 'none';
  });
}





function blurBackgroundAndDimOthers(winningCard) {
  const allCards = document.querySelectorAll('.case-card');

  allCards.forEach(card => {
    if (card !== winningCard) {
      card.style.transition = 'filter 0.5s ease, opacity 0.5s ease';
      card.style.filter = 'blur(4px) brightness(0.4)';
      card.style.opacity = '0.6';
    }
  });

  const vignette = document.querySelector('.blur-vignette');
  if (vignette) {
    vignette.style.transition = 'box-shadow 0.5s ease, backdrop-filter 0.5s ease';
    vignette.style.boxShadow = '0 0 0 9999px rgba(20,22,30,0.8) inset';
    vignette.style.backdropFilter = 'blur(12px) saturate(0.5)';
  }
}





function showPopupWithFadeIn(winningCoin) {
  const popup = document.getElementById('winning-popup');
  const image = document.getElementById('winning-image');
  const name = document.getElementById('winning-name');
  const rarityFade = document.getElementById('winning-rarity');
  const rarityText = document.getElementById('winning-rarity-text');
  const value = document.getElementById('winning-value');
  
  // Stop the winning card animation when popup appears
  stopWinningCardAnimation();
  // Remove this line since sound is now played earlier:
  // playRarityRevealSound(winningCoin.rarity);
  
  // Apply card-style for very small screens
  if (window.innerWidth <= 380 || window.innerHeight <= 600) {
    popup.classList.add('card-style');
  } else {
    popup.classList.remove('card-style');
  }
  
  // Set the content
  image.src = winningCoin.image;
  image.alt = winningCoin.name;
  name.textContent = winningCoin.name;
  rarityFade.style.background = winningCoin.gradient;
  rarityText.textContent = winningCoin.rarity.charAt(0).toUpperCase() + winningCoin.rarity.slice(1);
  
  // Add rarity class for color styling
  rarityText.className = `winning-rarity-text ${winningCoin.rarity}`;
  
  value.textContent = winningCoin.value;
  
  // Start invisible and animate in from center
  popup.style.display = 'block';
  popup.style.opacity = '0';
  popup.style.setProperty('--popup-scale', '0.8');
  popup.style.transition = 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)';
  document.querySelector('.blur-vignette').style.display = 'none';

  setTimeout(() => {
    popup.style.opacity = '1';
    popup.style.setProperty('--popup-scale', '1');
  }, 50);
}





function showInteractiveButtons() {
  const button = document.querySelector('.btn-again');
  
  if (button) {
    button.style.transition = 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)';
    button.style.opacity = '0';
    button.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
      button.style.opacity = '1';
      button.style.transform = 'translateY(0)';
    }, 100);
    
 

    button.onclick = () => openAgain();
  }
}





function openAgain() {
  const popup = document.getElementById('winning-popup');
  popup.style.opacity = '0';
  
  setTimeout(() => {
    startCarouselAnimation();
  }, 400);
}





let currentExtendedCoins = [];

function getExtendedCoinsArray() {
  return currentExtendedCoins;
}






document.querySelector('.unlock-btn').onclick = function() {
  console.log('Unlock button clicked!');
  
  // Play unlock sound first
  const unlockAudio = new Audio('sounds/case_unlock_01.mp3');
  unlockAudio.volume = 0.4;
  
  unlockAudio.play().then(() => {
    // Wait for sound to finish, then switch layout and start animation
    unlockAudio.addEventListener('ended', () => {
      console.log('Unlock sound finished, switching to carousel...');
      document.querySelector('.main-case-details').style.display = 'none';
      document.getElementById('carousel-view').style.display = 'flex';
      startCarouselAnimation();
    });
  }).catch(e => {
    console.log('Sound play failed, proceeding anyway:', e);
    // Fallback: wait for estimated sound duration then proceed
    setTimeout(() => {
      document.querySelector('.main-case-details').style.display = 'none';
      document.getElementById('carousel-view').style.display = 'flex';
      startCarouselAnimation();
    }, 1800); // Adjust this based on your sound file duration
  });
};

// Alternative: Fixed delay approach
document.querySelector('.unlock-btn').onclick = function() {
  console.log('Unlock button clicked!');
  
  // Play unlock sound
  playSound('sounds/case_unlock_01.mp3');
  
  // Wait for sound to finish before switching layout
  setTimeout(() => {
    console.log('Sound finished, switching to carousel...');
    document.querySelector('.main-case-details').style.display = 'none';
    document.getElementById('carousel-view').style.display = 'flex';
    startCarouselAnimation();
  }, 1800); // Adjust this timing to match your sound file duration
};

document.getElementById('back-btn2').onclick = function() {
  document.getElementById('carousel-view').style.display = 'none';
  document.querySelector('.main-case-details').style.display = 'flex';
  
  // Refresh the page
  location.reload();
};

// Add window resize handler to adjust layout
window.addEventListener('resize', function() {
  // Debounce resize events
  clearTimeout(window.resizeTimeout);
  window.resizeTimeout = setTimeout(function() {
    // If carousel is active, recalculate positions
    if (document.getElementById('carousel-view').style.display !== 'none') {
      console.log('Window resized, layout may need adjustment');
    }
  }, 250);
});

// Add touch event handling for better mobile experience
document.addEventListener('DOMContentLoaded', function() {
  // Prevent zoom on double tap for better UX
  let lastTouchEnd = 0;
  document.addEventListener('touchend', function (event) {
    const now = (new Date()).getTime();
    if (now - lastTouchEnd <= 300) {
      event.preventDefault();
    }
    lastTouchEnd = now;
  }, false);
  
  // Add touch feedback for buttons
  const buttons = document.querySelectorAll('button');
  buttons.forEach(button => {
    button.addEventListener('touchstart', function() {
      this.style.transform = 'scale(0.95)';
    });
    
    button.addEventListener('touchend', function() {
      this.style.transform = 'scale(1)';
    });
  });
});

















/*sounds*/

// Add sound playing function
function playSound(soundFile) {
  const audio = new Audio(soundFile);
  audio.volume = 0.3; // Adjust volume as needed
  audio.play().catch(e => console.log('Sound play failed:', e));
}

// Function to play sounds that match the visual deceleration
function startDeceleratingCardSounds() {
  const carousel = document.getElementById('carousel');
  if (!carousel) return;
  
  const animationDuration = 8000; // 8 seconds
  const startTime = Date.now();
  let lastSoundTime = 0;
  
  // Sound timing that matches the cubic-bezier easing
  // cubic-bezier(0.25, 0.46, 0.45, 0.94) starts fast and slows down
  function calculateSoundInterval(progress) {
    // At the beginning: fast sounds (short intervals)
    // At the end: slow sounds (long intervals)
    const minInterval = 80;   // Fastest sound interval (ms)
    const maxInterval = 400;  // Slowest sound interval (ms)
    
    // Use cubic easing to match visual deceleration
    const easedProgress = 1 - Math.pow(1 - progress, 3);
    const interval = minInterval + (maxInterval - minInterval) * easedProgress;
    
    return interval;
  }
  
  function playDeceleratingSound() {
    const currentTime = Date.now();
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / animationDuration, 1);
    
    const currentInterval = calculateSoundInterval(progress);
    
    // Play sound if enough time has passed based on current interval
    if (currentTime - lastSoundTime >= currentInterval) {
      playSound('sounds/csgo_ui_crate_item_scroll.mp3');
      lastSoundTime = currentTime;
      
      console.log(`Sound played at ${(progress * 100).toFixed(1)}% progress, interval: ${currentInterval.toFixed(0)}ms`);
    }
    
    // Continue until animation completes
    if (progress < 1) {
      requestAnimationFrame(playDeceleratingSound);
    } else {
      console.log('Deceleration sound sequence completed');
    }
  }
  
  // Start the deceleration sound sequence
  requestAnimationFrame(playDeceleratingSound);
}

// Alternative: More precise card-based deceleration
function startCardBasedDeceleratingSound() {
  const carousel = document.getElementById('carousel');
  if (!carousel) return;
  
  // Get responsive card width
  let cardWidth = 180;
  if (window.innerWidth <= 480) {
    cardWidth = 120;
  } else if (window.innerWidth <= 768) {
    cardWidth = 140;
  } else if (window.innerWidth <= 1024) {
    cardWidth = 160;
  }
  
  const animationDuration = 8000;
  const startTime = Date.now();
  let lastCardIndex = -1;
  let lastSoundTime = 0;
  
  // Calculate animation progress and current position
  function getAnimationProgress() {
    const elapsed = Date.now() - startTime;
    const progress = Math.min(elapsed / animationDuration, 1);
    
    // Apply cubic-bezier easing to match CSS animation
    // Approximation of cubic-bezier(0.25, 0.46, 0.45, 0.94)
    const t = progress;
    const easedProgress = 3 * t * t - 2 * t * t * t; // Smooth deceleration
    
    return { linear: progress, eased: easedProgress };
  }
  
  function trackCardBasedSound() {
    const progress = getAnimationProgress();
    const currentTime = Date.now();
    
    // Calculate minimum time between sounds based on progress
    const minInterval = 60 + (300 * progress.eased); // 60ms to 360ms
    
    // Get current carousel position
    const carouselRect = carousel.getBoundingClientRect();
    const centerX = window.innerWidth / 2;
    const carouselLeft = carouselRect.left;
    
    // Calculate which card is closest to center
    const relativeCenter = centerX - carouselLeft;
    const currentCardIndex = Math.round(relativeCenter / (cardWidth + 20));
    
    // Play sound when we move to a new card and enough time has passed
    if (currentCardIndex !== lastCardIndex && 
        currentTime - lastSoundTime >= minInterval && 
        currentCardIndex >= 0) {
      
      const cards = carousel.querySelectorAll('.case-card');
      if (cards[currentCardIndex]) {
        playSound('sounds/csgo_ui_crate_item_scroll.mp3');
        lastSoundTime = currentTime;
        lastCardIndex = currentCardIndex;
        
        console.log(`Card ${currentCardIndex} sound at ${(progress.linear * 100).toFixed(1)}% progress, interval: ${minInterval.toFixed(0)}ms`);
      }
    }
    
    if (progress.linear < 1) {
      requestAnimationFrame(trackCardBasedSound);
    }
  }
  
  requestAnimationFrame(trackCardBasedSound);
}

// Function to play rarity-based reveal sound
function playRarityRevealSound(rarity) {
  let soundFile;
  
  switch(rarity) {
    case 'common':
    case 'rare':
    case 'epic':
      soundFile = 'sounds/case_reveal_rare_01.mp3';
      break;
    case 'legendary':
      soundFile = 'sounds/case_reveal_legendary_01.mp3';
      break;
    case 'mythical':
      soundFile = 'sounds/case_reveal_mythical_01.mp3';
      break;
    default:
      soundFile = 'sounds/case_reveal_rare_01.mp3';
  }
  
  console.log(`Playing reveal sound for ${rarity}: ${soundFile}`);
  playSound(soundFile);
}

