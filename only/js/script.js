document.addEventListener('DOMContentLoaded', function() {
 
  
  
  // 页面加载时初始化
  if (document.querySelector('.resources-page')) {
    animateCards();
  }
  
  // 创建飘落爱心
  function createHearts() {
    const heartsContainer = document.getElementById('hearts-container');
    const heartCount = 15;
    
    for (let i = 0; i < heartCount; i++) {
      const heart = document.createElement('div');
      heart.classList.add('heart');
      heart.innerHTML = '❤️';
      heart.style.left = Math.random() * 100 + 'vw';
      heart.style.animationDuration = (Math.random() * 3 + 5) + 's';
      heart.style.animationDelay = Math.random() * 5 + 's';
      heartsContainer.appendChild(heart);
    }
  }
  
  // 创建烟花效果
  function createFireworks(count) {
    const container = document.getElementById('fireworks-container');
    const colors = ['#ff6b6b', '#ffb8b8', '#ff8e8e', '#ffd3d3', '#ff9e9e'];
    
    for (let i = 0; i < count; i++) {
      setTimeout(() => {
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight / 2;
        
        for (let j = 0; j < 30; j++) {
          const particle = document.createElement('div');
          particle.classList.add('firework');
          
          const angle = Math.random() * Math.PI * 2;
          const distance = Math.random() * 100 + 50;
          const px = Math.cos(angle) * distance;
          const py = Math.sin(angle) * distance;
          
          particle.style.setProperty('--x', px + 'px');
          particle.style.setProperty('--y', py + 'px');
          particle.style.color = colors[Math.floor(Math.random() * colors.length)];
          
          container.appendChild(particle);
          
          // 移除烟花粒子
          setTimeout(() => {
            particle.remove();
          }, 1000);
        }
      }, i * 300);
    }
  }
  
  // 随机触发烟花
  function randomFireworks() {
    const delay = Math.random() * 10000 + 5000; // 5-15秒随机间隔
    setTimeout(() => {
      createFireworks(1);
      randomFireworks();
    }, delay);
  }
  
  // 初始化
  createHearts();
  randomFireworks();
  
  // 导航栏活动项指示器
  const navItems = document.querySelectorAll('.nav-item');
  navItems.forEach(item => {
    item.addEventListener('click', function() {
      navItems.forEach(nav => nav.classList.remove('active'));
      this.classList.add('active');
    });
  });
  
  // 页面加载动画
  gsap.from('.container', {
    duration: 1,
    y: 50,
    opacity: 0,
    ease: 'power3.out'
  });
});
// 资源页标签切换
  function openTab(tabId) {
    // 隐藏所有标签内容
    document.querySelectorAll('.tab-content').forEach(tab => {
      tab.classList.remove('active');
    });
    
    // 取消所有按钮的active状态
    document.querySelectorAll('.tab-button').forEach(button => {
      button.classList.remove('active');
    });
    
    // 显示选中的标签内容
    document.getElementById(tabId).classList.add('active');
    
    // 设置当前按钮为active
    event.currentTarget.classList.add('active');
    
    // 触发重新动画
    animateCards();
  }
  
  // 卡片入场动画
  function animateCards() {
    const cards = document.querySelectorAll('.tab-content.active .resource-card');
    cards.forEach((card, index) => {
      card.style.animationDelay = `${index * 0.1}s`;
      card.classList.add('animate__fadeIn');
    });
  }