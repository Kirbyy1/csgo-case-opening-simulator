const items = [
    { img: 'images/guns/images.oki1webp.webp', name: 'Weapon 1' },
    { img: 'images/guns/images.oki2webp.webp', name: 'Weapon 2' },
    { img: 'images/guns/images.oki3webp.webp', name: 'Weapon 3' },
    { img: 'images/guns/images.oki4webp.webp', name: 'Weapon 4' },
    { img: 'images/guns/images.oki5webp.webp', name: 'Weapon 5' },
    { img: 'images/guns/images.oki6webp.webp', name: 'Weapon 6' },
    { img: 'images/guns/images.oki7webp.webp', name: 'Weapon 7' },
    { img: 'images/guns/images.oki8webp.webp', name: 'Weapon 8' },
    { img: 'images/guns/images.oki9webp.webp', name: 'Weapon 9' },
    { img: 'images/guns/images.oki10webp.webp', name: 'Weapon 10' },
    { img: 'images/guns/images.oki11webp.webp', name: 'Weapon 11' },
    { img: 'images/guns/images.oki12webp.webp', name: 'Weapon 12' },
    { img: 'images/guns/images.oki13webp.webp', name: 'Weapon 13' },
    { img: 'images/guns/images.oki14webp.webp', name: 'Weapon 14' },
    { img: 'images/guns/images.oki15webp.webp', name: 'Weapon 15' },
    { img: 'images/guns/images.oki16webp.webp', name: 'Weapon 16' },
    { img: 'images/guns/images.oki17webp.webp', name: 'Weapon 17' },
    { img: 'images/guns/images.oki18webp.webp', name: 'Weapon 18' },
];

// Example: Start animation with the 3rd item as the winner
document.getElementById('unlock-btn').addEventListener('click', function() {
    // Pick a random winning index or set as needed
    const winningIndex = Math.floor(Math.random() * items.length);
    startCaseAnimation(winningIndex);
  });


function startCaseAnimation(winningIndex) {
    const animationArea = document.getElementById('animation-area');
    const itemsStrip = document.getElementById('items-strip');
    animationArea.classList.remove('hidden');
    itemsStrip.innerHTML = '';
  
    // Repeat items to make a long strip
    const repeatCount = 20;
    let stripItems = [];
    for (let i = 0; i < repeatCount; i++) {
      stripItems = stripItems.concat(items);
    }
  
    // Add the winning item at the end
    stripItems.push(items[winningIndex]);
  
    // Build the strip
    stripItems.forEach(item => {
      const div = document.createElement('div');
      div.className = 'item-image';
      div.innerHTML = `<img src="${item.img}" alt="${item.name}" style="width:100px;height:100px;">`;
      itemsStrip.appendChild(div);
    });
  
    // Animate the strip
    animateStrip(itemsStrip, stripItems.length, winningIndex);
  }



  function animateStrip(strip, totalItems, winningIndex) {
    const itemWidth = 110; // width + margin
    const visibleItems = 7; // how many items visible at once
    const duration = 4000; // ms
  
    // Calculate the final offset so the winning item is centered
    const finalOffset = (totalItems - Math.floor(visibleItems / 2) - 1) * itemWidth;
  
    strip.style.transition = `transform ${duration}ms cubic-bezier(0.1, 0.4, 0.4, 1)`;
    strip.style.transform = `translateX(-${finalOffset}px)`;
  
    setTimeout(() => {
      // Highlight the winning item
      const children = strip.children;
      children[children.length - Math.floor(visibleItems / 2) - 1].classList.add('winning-item');
      // Optionally: play sound, show confetti, etc.
    }, duration);
  }



