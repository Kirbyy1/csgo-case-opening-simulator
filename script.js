const memeCoins = [
  {
    name: "Camo Coin",
    image: "images/trasparent coins/Camo_Coin-removebg-preview.webp",
    rarity: "common", // blue
    odds: 0.18,
    value: "91.780,43 $",
    gradient: "linear-gradient(90deg,#1a8cff 60%,#fff0)"
  },
  {
    name: "CH Coin",
    image: "images/trasparent coins/CH_Coin-removebg-preview.webp",
    rarity: "common", // blue
    odds: 0.18,
    status: "Launched",
    value: "91.780,43 $",
    gradient: "linear-gradient(90deg,#1a8cff 60%,#fff0)"
  },
  {
    name: "ChillGuy Coin",
    image: "images/trasparent coins/ChillGuy_Coin_-removebg-preview.webp",
    rarity: "common", // blue
    odds: 0.18,
    value: "91.780,43 $",
    gradient: "linear-gradient(90deg,#1a8cff 60%,#fff0)"
  },
  {
    name: "Dragon Coin",
    image: "images/trasparent coins/Dragon_Coin-removebg-preview.webp",
    rarity: "common", // blue
    odds: 0.18,
    status: "Launched",
    value: "91.780,43 $",
    gradient: "linear-gradient(90deg,#1a8cff 60%,#fff0)"
  },
  {
    name: "Fire Coin",
    image: "images/trasparent coins/Fire_Coin-removebg-preview.webp",
    rarity: "common", // blue
    odds: 0.18,
    value: "91.780,43 $",
    gradient: "linear-gradient(90deg,#1a8cff 60%,#fff0)"
  },
  {
    name: "Honey Coin",
    image: "images/trasparent coins/honey coin.webp",
    rarity: "common", // blue
    odds: 0.18,
    status: "Launched",
    value: "91.780,43 $",
    gradient: "linear-gradient(90deg,#1a8cff 60%,#fff0)"
  },
  {
    name: "Nasdaq Coin",
    image: "images/trasparent coins/Nasdaq.webp",
    rarity: "common", // blue
    odds: 0.18,
    value: "91.780,43 $",
    gradient: "linear-gradient(90deg,#1a8cff 60%,#fff0)"
  },
  {
    name: "Water Coin",
    image: "images/trasparent coins/Water_Coin-removebg-preview.webp",
    rarity: "common", // blue
    odds: 0.18,
    status: "Launched",
    value: "91.780,43 $",
    gradient: "linear-gradient(90deg,#1a8cff 60%,#fff0)"
  },
  {
    name: "Nightmare Coin",
    image: "images/trasparent coins/Nightmare_coin-removebg-preview.webp",
    rarity: "rare", // purple
    odds: 0.05,
    value: "91.780,43 $",
    gradient: "linear-gradient(90deg,hsl(279, 97%, 49%) 60%,#fff0)"
  },
  {
    name: "Pepe Coin",
    image: "images/trasparent coins/Pepe_Coin-removebg-preview.webp",
    rarity: "rare", // purple
    odds: 0.05,
    status: "Launched",
    value: "91.780,43 $",
    gradient: "linear-gradient(90deg,hsl(279, 97%, 49%) 60%,#fff0)"
  },
  {
    name: "Stonks Coin",
    image: "images/trasparent coins/Stonks_Coin-removebg-preview.webp",
    rarity: "epic", // pink
    odds: 0.03,
    value: "91.780,43 $",
    gradient: "linear-gradient(90deg,#d21dba 60%,#fff0)"
  },
  {
    name: "US Coin",
    image: "images/trasparent coins/US_Coin-removebg-preview.webp",
    rarity: "legendary", // red
    odds: 0.015,
    status: "Launched",
    value: "91.780,43 $",
    gradient: "linear-gradient(90deg,#ec2603 60%,#fff0)"
  },
  {
    name: "Bitcoin",
    image: "images/trasparent coins/bitcoin(xryso).webp",
    rarity: "mythical", // gold
    odds: 0.002,
    value: "91.780,43 $",
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
  
  // Use DocumentFragment for better performance
  const fragment = document.createDocumentFragment();
  
  coinsArray.forEach((coin, index) => {
    const card = document.createElement('div');
    card.className = 'case-card';
    
    const img = document.createElement('img');
    img.alt = coin.name;
    
    // Use preloaded image if available
    const preloadedImg = preloadedImages.get(coin.image);
    if (preloadedImg) {
      img.src = preloadedImg.src;
    } else {
      img.src = coin.image;
    }
    
    const rarityFade = document.createElement('div');
    rarityFade.className = 'rarity-fade';
    rarityFade.style.background = coin.gradient;
    
    if (index === winningIndex) {
      const centerLine = document.createElement('div');
      centerLine.className = 'center-line';
      card.appendChild(centerLine);
    }
    
    card.appendChild(img);
    card.appendChild(rarityFade);
    fragment.appendChild(card);
  });
  
  carousel.appendChild(fragment);
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
  console.log('🚀 Starting perfectly centered carousel animation!');
  
  if (!isPreloaded) {
    console.warn('⚠️ Assets not fully preloaded, animation may be laggy');
  }
  
  const centerLines = document.querySelectorAll('.center-line');
  centerLines.forEach(line => {
    line.style.display = 'block';
  });
  
  // Ensure blur-vignette is shown consistently across all screen sizes
  const blurVignette = document.querySelector('.blur-vignette');
  if (blurVignette) {
    blurVignette.style.display = 'block';
    blurVignette.style.opacity = '1';
    blurVignette.style.visibility = 'visible';
    console.log('Blur vignette shown for screen size:', window.innerWidth, 'x', window.innerHeight);
  } else {
    console.warn('Blur vignette element not found!');
  }
  
  // Use pre-generated data if available, otherwise generate new
  let carouselData;
  if (preGeneratedCarousel) {
    carouselData = preGeneratedCarousel;
    console.log('📦 Using pre-generated perfectly centered carousel data');
  } else {
    console.log('🔄 Generating new perfectly centered carousel data');
    carouselData = generatePerfectlyCenteredCarousel();
  }
  
  currentExtendedCoins = carouselData.coins;
  console.log('Total cards:', carouselData.coins.length, 'Winning at:', carouselData.centerIndex);
  
  // Use optimized rendering
  renderCarouselCardsWithArray(carouselData.coins, carouselData.centerIndex);
  animateCarouselToPerfectCenter(carouselData.centerIndex, carouselData.winningCoin, carouselData.centering);
  
  // Generate new data for next animation
  setTimeout(() => {
    preGenerateCarouselData();
  }, 100);
}





function animateCarouselToCenter(centerIndex, winningCoin) {
  // Use the new perfect centering system
  const centering = calculatePerfectCenterPosition();
  animateCarouselToPerfectCenter(centerIndex, winningCoin, centering);
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
  
  // Phase 2: Blur background (400ms delay - slightly longer for smoother transition)
  setTimeout(() => {
    blurBackgroundAndDimOthers(actualCenterCard);
  }, 400);
  
  // Phase 3: Play reveal sound (500ms delay - after blur effect starts)
  setTimeout(() => {
    playRarityRevealSound(actualWinningCoin.rarity);
  }, 500);
  
  // Phase 4: Show popup with winning coin (1200ms delay - more time for sound to settle)
  setTimeout(() => {
    showPopupWithFadeIn(actualWinningCoin);
  }, 1200);
  
  // Phase 5: Show button (1700ms delay - more time after popup appears)
  setTimeout(() => {
    showInteractiveButtons();
  }, 1700);
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
      card.style.transition = 'filter 0.6s ease, opacity 0.6s ease';
      card.style.filter = 'blur(4px) brightness(0.4)';
      card.style.opacity = '0.6';
    }
  });

  const vignette = document.querySelector('.blur-vignette');
  if (vignette) {
    vignette.style.transition = 'box-shadow 0.6s ease, backdrop-filter 0.6s ease';
    vignette.style.boxShadow = '0 0 0 9999px rgba(20,22,30,0.8) inset';
    vignette.style.backdropFilter = 'blur(12px) saturate(0.5)';
    console.log('Blur vignette enhanced for screen size:', window.innerWidth, 'x', window.innerHeight);
  } else {
    console.warn('Blur vignette not found during blurBackgroundAndDimOthers!');
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
  
  // Start invisible and animate in from center with smoother timing
  popup.style.display = 'block';
  popup.style.opacity = '0';
  popup.style.setProperty('--popup-scale', '0.7');
  popup.style.transition = 'all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)';
  
  // Ensure blur-vignette is hidden consistently across all screen sizes
  const blurVignette = document.querySelector('.blur-vignette');
  if (blurVignette) {
    blurVignette.style.display = 'none';
    blurVignette.style.opacity = '0';
    blurVignette.style.visibility = 'hidden';
  }

  // Slightly longer delay for smoother animation
  setTimeout(() => {
    popup.style.opacity = '1';
    popup.style.setProperty('--popup-scale', '1');
  }, 100);
}





function showInteractiveButtons() {
  const button = document.querySelector('.btn-again');
  
  if (button) {
    button.style.transition = 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)';
    button.style.opacity = '0';
    button.style.transform = 'translateY(30px) scale(0.9)';
    
    setTimeout(() => {
      button.style.opacity = '1';
      button.style.transform = 'translateY(0) scale(1)';
    }, 150);
    
    button.onclick = () => openAgain();
  }
}





function openAgain() {
  const popup = document.getElementById('winning-popup');
  popup.style.opacity = '0';
  // Removed blur-vignette hiding here so the blur stays visible
  setTimeout(() => {
    startCarouselAnimation();
  }, 400);
}





let currentExtendedCoins = [];

function getExtendedCoinsArray() {
  return currentExtendedCoins;
}






// Single, properly synchronized unlock button handler
const unlockBtn = document.querySelector('.unlock-btn');
if (unlockBtn) {
  unlockBtn.onclick = function() {
    console.log('Unlock button clicked!');
    
    // Disable the button to prevent multiple clicks
    unlockBtn.disabled = true;
    unlockBtn.style.opacity = '0.6';
    unlockBtn.style.cursor = 'not-allowed';
    
    // Show loading text
    const loadingText = document.getElementById('loading-text');
    loadingText.style.display = 'block';
    setTimeout(() => loadingText.classList.add('show'), 10);
    
    // Play unlock sound with proper synchronization
    const unlockAudio = new Audio('sounds/case_unlock_01.mp3');
    unlockAudio.volume = 0.4;
    
    // Get the actual duration of the audio file for precise timing
    unlockAudio.addEventListener('loadedmetadata', () => {
      const soundDuration = unlockAudio.duration * 700; // Convert to milliseconds
      console.log('Unlock sound duration:', soundDuration, 'ms');
      
      // Play the sound
      unlockAudio.play().then(() => {
        // Wait for the exact duration of the sound before switching
        setTimeout(() => {
          console.log('Unlock sound finished, switching to carousel...');
          
          // Hide loading text
          const loadingText = document.getElementById('loading-text');
          loadingText.classList.remove('show');
          setTimeout(() => loadingText.style.display = 'none', 300);
          
          document.querySelector('.main-case-details').style.display = 'none';
          document.getElementById('carousel-view').style.display = 'flex';
          startCarouselAnimation();
          
          // Re-enable the button
          unlockBtn.disabled = false;
          unlockBtn.style.opacity = '1';
          unlockBtn.style.cursor = 'pointer';
        }, soundDuration);
      }).catch(e => {
        console.log('Sound play failed, using fallback timing:', e);
        // Fallback: use estimated duration if audio loading fails
        setTimeout(() => {
          // Hide loading text
          const loadingText = document.getElementById('loading-text');
          loadingText.classList.remove('show');
          setTimeout(() => loadingText.style.display = 'none', 300);
          
          document.querySelector('.main-case-details').style.display = 'none';
          document.getElementById('carousel-view').style.display = 'flex';
          startCarouselAnimation();
          
          // Re-enable the button
          unlockBtn.disabled = false;
          unlockBtn.style.opacity = '1';
          unlockBtn.style.cursor = 'pointer';
        }, 1800); // Fallback duration
      });
    });
    
    // Fallback if audio metadata fails to load
    unlockAudio.addEventListener('error', () => {
      console.log('Audio metadata failed to load, using fallback timing');
      setTimeout(() => {
        // Hide loading text
        const loadingText = document.getElementById('loading-text');
        loadingText.classList.remove('show');
        setTimeout(() => loadingText.style.display = 'none', 300);
        
        document.querySelector('.main-case-details').style.display = 'none';
        document.getElementById('carousel-view').style.display = 'flex';
        startCarouselAnimation();
        
        // Re-enable the button
        unlockBtn.disabled = false;
        unlockBtn.style.opacity = '1';
        unlockBtn.style.cursor = 'pointer';
      }, 1800);
    });
  };
}

const backBtn2 = document.getElementById('back-btn2');
if (backBtn2) {
  backBtn2.onclick = function() {
    document.getElementById('carousel-view').style.display = 'none';
    document.querySelector('.main-case-details').style.display = 'flex';
    // Refresh the page
    location.reload();
  };
}

// Add window resize handler to adjust layout
window.addEventListener('resize', function() {
  // Debounce resize events
  clearTimeout(window.resizeTimeout);
  window.resizeTimeout = setTimeout(function() {
    // If carousel is active, recalculate positions
    if (document.getElementById('carousel-view').style.display !== 'none') {
      console.log('Window resized, layout may need adjustment');
      
      // Check blur-vignette state after resize
      const blurVignette = document.querySelector('.blur-vignette');
      if (blurVignette) {
        console.log('Blur vignette state after resize:', {
          display: blurVignette.style.display,
          opacity: blurVignette.style.opacity,
          visibility: blurVignette.style.visibility,
          screenSize: `${window.innerWidth}x${window.innerHeight}`
        });
      }
    }
  }, 250);
});

// Add touch event handling for better mobile experience
document.addEventListener('DOMContentLoaded', function() {
  // Initialize blur-vignette state
  const blurVignette = document.querySelector('.blur-vignette');
  if (blurVignette) {
    blurVignette.style.display = 'none';
    blurVignette.style.opacity = '0';
    blurVignette.style.visibility = 'hidden';
    console.log('Blur vignette initialized for screen size:', window.innerWidth, 'x', window.innerHeight);
  }
  
  // Show loading state on unlock button
  const unlockBtn = document.querySelector('.unlock-btn');
  if (unlockBtn) {
    unlockBtn.style.opacity = '0.7';
    unlockBtn.innerHTML = unlockBtn.innerHTML.replace('UNLOCK CASE', 'Loading...');
  }
  
  // Start preloading assets
  preloadAssets();
  preGenerateCarouselData();
  
  // Prevent zoom on double tap for better UX
  let lastTouchEnd = 0;
  document.addEventListener('touchend', function (event) {
    const now = (new Date()).getTime();
    if (now - lastTouchEnd <= 300) {
      event.preventDefault();
    }
    lastTouchEnd = now;
  }, false);
  
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
  playPreloadedSound(soundFile);
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



































// === PRELOADING SYSTEM FOR SMOOTH ANIMATIONS ===
let preloadedImages = new Map();
let preloadedSounds = new Map();
let isPreloaded = false;

function preloadAssets() {
  console.log('🚀 Starting asset preloading...');
  
  // Preload all coin images
  const imagePromises = memeCoins.map(coin => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => {
        preloadedImages.set(coin.image, img);
        console.log(`✅ Preloaded image: ${coin.name}`);
        resolve();
      };
      img.onerror = () => {
        console.warn(`❌ Failed to preload image: ${coin.name}`);
        reject();
      };
      img.src = coin.image;
    });
  });
  
  // Preload all sound files
  const soundFiles = [
    'sounds/case_unlock_01.mp3',
    'sounds/csgo_ui_crate_item_scroll.mp3',
    'sounds/case_reveal_rare_01.mp3',
    'sounds/case_reveal_legendary_01.mp3',
    'sounds/case_reveal_mythical_01.mp3',
    'sounds/case_reveal_ancient_01.mp3'
  ];
  
  const soundPromises = soundFiles.map(soundFile => {
    return new Promise((resolve, reject) => {
      const audio = new Audio();
      audio.addEventListener('canplaythrough', () => {
        preloadedSounds.set(soundFile, audio);
        console.log(`🔊 Preloaded sound: ${soundFile}`);
        resolve();
      });
      audio.addEventListener('error', () => {
        console.warn(`❌ Failed to preload sound: ${soundFile}`);
        reject();
      });
      audio.src = soundFile;
      audio.load();
    });
  });
  
  // Wait for all assets to load
  Promise.allSettled([...imagePromises, ...soundPromises]).then(() => {
    isPreloaded = true;
    console.log('🎉 Asset preloading completed!');
    
    // Enable unlock button with visual feedback
    const unlockBtn = document.querySelector('.unlock-btn');
    if (unlockBtn) {
      unlockBtn.style.opacity = '1';
      unlockBtn.style.filter = 'brightness(1.1)';
      unlockBtn.innerHTML = unlockBtn.innerHTML.replace('Loading...', 'UNLOCK CASE');
    }
  });
}

// Pre-generate carousel data for smoother animation
let preGeneratedCarousel = null;

function preGenerateCarouselData() {
  const carouselData = generatePerfectlyCenteredCarousel();
  preGeneratedCarousel = carouselData;
  console.log('🎰 Pre-generated perfectly centered carousel data:', preGeneratedCarousel.coins.length, 'cards');
}

// Enhanced sound playing function that uses preloaded sounds
function playPreloadedSound(soundFile) {
  const preloadedAudio = preloadedSounds.get(soundFile);
  if (preloadedAudio) {
    // Clone the audio to allow multiple simultaneous plays
    const audio = preloadedAudio.cloneNode();
    audio.volume = 0.3;
    audio.play().catch(e => console.log('Preloaded sound play failed:', e));
  } else {
    // Fallback to regular sound loading
    const audio = new Audio(soundFile);
    audio.volume = 0.3;
    audio.play().catch(e => console.log('Fallback sound play failed:', e));
  }
}

// Enhanced render function that uses preloaded images
function renderCarouselCardsWithArrayOptimized(coinsArray, winningIndex) {
  const carousel = document.getElementById('carousel');
  carousel.innerHTML = '';
  
  // Use DocumentFragment for better performance
  const fragment = document.createDocumentFragment();
  
  coinsArray.forEach((coin, index) => {
    const card = document.createElement('div');
    card.className = 'case-card';
    
    const img = document.createElement('img');
    img.alt = coin.name;
    
    // Use preloaded image if available
    const preloadedImg = preloadedImages.get(coin.image);
    if (preloadedImg) {
      img.src = preloadedImg.src;
    } else {
      img.src = coin.image;
    }
    
    const rarityFade = document.createElement('div');
    rarityFade.className = 'rarity-fade';
    rarityFade.style.background = coin.gradient;
    
    if (index === winningIndex) {
      const centerLine = document.createElement('div');
      centerLine.className = 'center-line';
      card.appendChild(centerLine);
    }
    
    card.appendChild(img);
    card.appendChild(rarityFade);
    fragment.appendChild(card);
  });
  
  carousel.appendChild(fragment);
}

// Enhanced carousel animation that uses pre-generated data
function startCarouselAnimationOptimized() {
  console.log('🚀 Starting optimized carousel animation!');
  
  if (!isPreloaded) {
    console.warn('⚠️ Assets not fully preloaded, animation may be laggy');
  }
  
  const centerLines = document.querySelectorAll('.center-line');
  centerLines.forEach(line => {
    line.style.display = 'block';
  });
  
  // Ensure blur-vignette is shown consistently across all screen sizes
  const blurVignette = document.querySelector('.blur-vignette');
  if (blurVignette) {
    blurVignette.style.display = 'block';
    blurVignette.style.opacity = '1';
    blurVignette.style.visibility = 'visible';
    console.log('Blur vignette shown for screen size:', window.innerWidth, 'x', window.innerHeight);
  } else {
    console.warn('Blur vignette element not found!');
  }
  
  // Use pre-generated data if available, otherwise generate new
  let carouselData;
  if (preGeneratedCarousel) {
    carouselData = preGeneratedCarousel;
    console.log('📦 Using pre-generated carousel data');
  } else {
    console.log('🔄 Generating new carousel data (not optimal)');
    const cardWidth = 180;
    const screenWidth = window.innerWidth;
    const totalScrollDistance = screenWidth + 3000;
    const cardsNeeded = Math.ceil(totalScrollDistance / cardWidth) + 10;
    
    let extendedCoins = [];
    while (extendedCoins.length < cardsNeeded) {
      const shuffled = shuffleArray([...memeCoins]);
      extendedCoins.push(...shuffled);
    }
    
    const centerIndex = Math.floor(cardsNeeded * 0.6);
    const winningCoin = pickCoinByOdds(memeCoins);
    extendedCoins[centerIndex] = winningCoin;
    
    const extraCardsAfter = 50;
    for (let i = 0; i < extraCardsAfter; i++) {
      const randomCoin = memeCoins[Math.floor(Math.random() * memeCoins.length)];
      extendedCoins.push(randomCoin);
    }
    
    carouselData = {
      coins: extendedCoins,
      centerIndex: centerIndex,
      winningCoin: winningCoin
    };
  }
  
  currentExtendedCoins = carouselData.coins;
  console.log('Total cards:', carouselData.coins.length, 'Winning at:', carouselData.centerIndex);
  
  // Use optimized rendering
  renderCarouselCardsWithArrayOptimized(carouselData.coins, carouselData.centerIndex);
  animateCarouselToCenter(carouselData.centerIndex, carouselData.winningCoin);
  
  // Generate new data for next animation
  setTimeout(() => {
    preGenerateCarouselData();
  }, 100);
}

// === PERFECT CENTERING SYSTEM ===
function calculatePerfectCenterPosition() {
  // Get responsive card width and spacing
  let cardWidth = 160; // Base card width
  let cardSpacing = 20; // Total spacing (10px margin on each side)
  let totalCardWidth = cardWidth + cardSpacing;
  
  if (window.innerWidth <= 480) {
    cardWidth = 100; // Small mobile
    cardSpacing = 8; // 4px margin on each side
    totalCardWidth = cardWidth + cardSpacing;
  } else if (window.innerWidth <= 768) {
    cardWidth = 120; // Mobile
    cardSpacing = 16; // 8px margin on each side
    totalCardWidth = cardWidth + cardSpacing;
  } else if (window.innerWidth <= 1024) {
    cardWidth = 140; // Tablet
    cardSpacing = 18; // 9px margin on each side
    totalCardWidth = cardWidth + cardSpacing;
  }
  
  const screenWidth = window.innerWidth;
  const screenCenter = screenWidth / 2;
  
  // Calculate how many cards we need to fill the screen plus extra for animation
  const cardsToFillScreen = Math.ceil(screenWidth / totalCardWidth) + 20; // Extra cards for smooth animation
  
  // Calculate the total width of all cards
  const totalCardsWidth = cardsToFillScreen * totalCardWidth;
  
  // Calculate the center index (middle of the carousel)
  const centerIndex = Math.floor(cardsToFillScreen / 2);
  
  // Calculate the position that centers the winning card
  const winningCardCenter = centerIndex * totalCardWidth;
  const finalPosition = screenCenter - winningCardCenter - (cardWidth / 2);
  
  console.log('🎯 Perfect centering calculation:', {
    screenWidth,
    screenCenter,
    cardWidth,
    cardSpacing,
    totalCardWidth,
    cardsToFillScreen,
    centerIndex,
    winningCardCenter,
    finalPosition
  });
  
  return {
    centerIndex,
    finalPosition,
    totalCardsWidth,
    cardWidth,
    cardSpacing
  };
}

function generatePerfectlyCenteredCarousel() {
  const centering = calculatePerfectCenterPosition();
  const { centerIndex, totalCardsWidth, cardWidth, cardSpacing } = centering;
  
  // Generate enough cards to fill the calculated width plus extra
  const totalCardsNeeded = Math.ceil(totalCardsWidth / (cardWidth + cardSpacing)) + 50; // Extra for smooth animation
  
  let extendedCoins = [];
  while (extendedCoins.length < totalCardsNeeded) {
    const shuffled = shuffleArray([...memeCoins]);
    extendedCoins.push(...shuffled);
  }
  
  // Place winning coin at the calculated center
  const winningCoin = pickCoinByOdds(memeCoins);
  extendedCoins[centerIndex] = winningCoin;
  
  console.log('🎰 Generated perfectly centered carousel:', {
    totalCards: extendedCoins.length,
    winningIndex: centerIndex,
    winningCoin: winningCoin.name
  });
  
  return {
    coins: extendedCoins,
    centerIndex: centerIndex,
    winningCoin: winningCoin,
    centering: centering
  };
}

function animateCarouselToPerfectCenter(centerIndex, winningCoin, centering) {
  const carousel = document.getElementById('carousel');
  if (!carousel) return;

  const { finalPosition, cardWidth } = centering;
  
  console.log('🎯 Animating to perfect center:', {
    centerIndex,
    finalPosition,
    cardWidth,
    screenWidth: window.innerWidth
  });
  
  carousel.style.transition = 'none';
  carousel.style.transform = 'translateX(800px)';
  
  setTimeout(() => {
    carousel.style.transition = 'transform 8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
    carousel.style.transform = `translateX(${finalPosition}px)`;
    
    // Start deceleration sound sequence
    startCardBasedDeceleratingSound();
    
    setTimeout(() => {
      console.log('Animation finished, showing popup...');
      showWinningPopup(centerIndex, winningCoin);
    }, 8100);
  }, 200);
}

// Fetch real-time BTC price in USD
async function fetchBTCPriceUSD() {
  try {
    const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd');
    const data = await response.json();
    return data.bitcoin.usd;
  } catch (e) {
    console.error('Failed to fetch BTC price:', e);
    return null;
  }
}

// Update all price tags in the DOM and JS data model
async function updateBTCPrices() {
  const btcPrice = await fetchBTCPriceUSD();
  if (btcPrice) {
    // Update all .case-details-price elements
    document.querySelectorAll('.case-details-price').forEach(el => {
      // Only update if it is not a 0 $ price
      if (!el.textContent.trim().startsWith('0')) {
        el.textContent = btcPrice.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + '\u00A0$';
      }
    });
    // Update all .case-price elements (for both index.html and case-details.html)
    document.querySelectorAll('.case-price').forEach(el => {
      el.textContent = btcPrice.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + '\u00A0$';
    });
    // Update memeCoins value property
    if (typeof memeCoins !== 'undefined') {
      memeCoins.forEach(coin => {
        coin.value = btcPrice.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + '\u00A0$';
      });
    }
  }
}

// Call updateBTCPrices on DOMContentLoaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', updateBTCPrices);
} else {
  updateBTCPrices();
}