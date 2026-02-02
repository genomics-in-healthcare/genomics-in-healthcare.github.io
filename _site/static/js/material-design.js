/**
 * Material Design JavaScript for Genomics in Healthcare Lab
 * Provides interactive functionality for Material Design components
 */

class MaterialDesign {
  constructor() {
    this.init();
  }

  init() {
    this.setupNavigation();
    this.setupRippleEffects();
    this.setupScrollEffects();
    this.setupFormValidation();
    this.setupLazyLoading();
    this.setupAccessibility();
  }

  /**
   * Set up navigation functionality
   */
  setupNavigation() {
    const menuButton = document.getElementById('menuButton');
    const navigationDrawer = document.getElementById('navigationDrawer');
    const backdrop = document.getElementById('backdrop');
    const closeDrawerButton = document.getElementById('closeDrawerButton');
    
    if (!menuButton || !navigationDrawer || !backdrop) return;

    // Toggle navigation drawer
    const toggleDrawer = () => {
      if (navigationDrawer.classList.contains('md-navigation-drawer--open')) {
        this.closeDrawer();
      } else {
        this.openDrawer();
      }
    };

    // Open navigation drawer with enhanced animation
    this.openDrawer = () => {
      // Add opening animation classes
      navigationDrawer.classList.add('md-navigation-drawer--opening');
      
      // Trigger the open state after a brief delay for smooth animation
      requestAnimationFrame(() => {
        navigationDrawer.classList.add('md-navigation-drawer--open');
        backdrop.classList.add('md-backdrop--visible');
        document.body.style.overflow = 'hidden';
        
        // Add a subtle vibration effect for mobile devices
        if (navigator.vibrate) {
          navigator.vibrate(50);
        }
        
        // 设置焦点到第一个导航项
        setTimeout(() => {
          const firstNavItem = navigationDrawer.querySelector('.md-navigation-drawer__item');
          if (firstNavItem) {
            firstNavItem.focus();
          }
        }, 200);
      });
    };

    // 关闭导航抽屉 with enhanced animation
    this.closeDrawer = () => {
      // Add closing animation
      navigationDrawer.classList.add('md-navigation-drawer--closing');
      
      // Remove open state after animation
      setTimeout(() => {
        navigationDrawer.classList.remove('md-navigation-drawer--open');
        navigationDrawer.classList.remove('md-navigation-drawer--opening');
        navigationDrawer.classList.remove('md-navigation-drawer--closing');
        backdrop.classList.remove('md-backdrop--visible');
        document.body.style.overflow = '';
        
        // 将焦点返回到菜单按钮
        menuButton.focus();
      }, 300);
    };

    // 事件监听器
    menuButton.addEventListener('click', toggleDrawer);
    backdrop.addEventListener('click', this.closeDrawer);
    
    // 关闭按钮事件监听器
    if (closeDrawerButton) {
      closeDrawerButton.addEventListener('click', this.closeDrawer);
    }
    
    // 点击导航项后关闭抽屉
    const navItems = document.querySelectorAll('.md-navigation-drawer__item');
    navItems.forEach(item => {
      item.addEventListener('click', this.closeDrawer);
    });

    // 响应式处理
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        this.closeDrawer();
      }
    };
    
    window.addEventListener('resize', handleResize);

    // 键盘导航
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        this.closeDrawer();
      }
      
      // 支持方向键导航
      if (navigationDrawer.classList.contains('md-navigation-drawer--open')) {
        const navItems = Array.from(navigationDrawer.querySelectorAll('.md-navigation-drawer__item'));
        const currentIndex = navItems.indexOf(document.activeElement);
        
        if (e.key === 'ArrowDown' && currentIndex < navItems.length - 1) {
          e.preventDefault();
          navItems[currentIndex + 1].focus();
        } else if (e.key === 'ArrowUp' && currentIndex > 0) {
          e.preventDefault();
          navItems[currentIndex - 1].focus();
        } else if (e.key === 'Home') {
          e.preventDefault();
          navItems[0].focus();
        } else if (e.key === 'End') {
          e.preventDefault();
          navItems[navItems.length - 1].focus();
        }
      }
    });
  }

  /**
   * 设置涟漪效果
   */
  setupRippleEffects() {
    const addRippleEffect = (element) => {
      element.addEventListener('click', (e) => {
        const rect = element.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const ripple = document.createElement('span');
        ripple.className = 'md-ripple';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        
        // 对于汉堡按钮，不修改position和overflow，避免位置偏移
        if (element.id !== 'menuButton') {
          element.style.position = 'relative';
          element.style.overflow = 'hidden';
        }
        element.appendChild(ripple);
        
        setTimeout(() => {
          ripple.remove();
        }, 600);
      });
    };

    // 为所有按钮和可点击元素添加涟漪效果
    const interactiveElements = document.querySelectorAll(
      '.md-button, .md-navigation-drawer__item, .md-list-item, .md-chip, .md-fab'
    );
    interactiveElements.forEach(addRippleEffect);
  }

  /**
   * 设置滚动效果
   */
  setupScrollEffects() {
    let lastScrollY = window.scrollY;
    const appBar = document.querySelector('.md-app-bar');
    
    if (!appBar) return;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > 0) {
        appBar.classList.add('md-app-bar--elevated');
      } else {
        appBar.classList.remove('md-app-bar--elevated');
      }
      
      lastScrollY = currentScrollY;
    };

    // 使用节流优化滚动性能
    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledScroll, { passive: true });
  }

  /**
   * 设置表单验证
   */
  setupFormValidation() {
    const forms = document.querySelectorAll('.md-contact-form');
    
    forms.forEach(form => {
      const inputs = form.querySelectorAll('.md-form-field__input');
      
      inputs.forEach(input => {
        // 实时验证
        input.addEventListener('blur', () => {
          this.validateField(input);
        });
        
        // 清除错误状态
        input.addEventListener('input', () => {
          this.clearFieldError(input);
        });
      });
      
      // 表单提交验证
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        this.validateForm(form);
      });
    });
  }

  /**
   * 验证单个字段
   */
  validateField(field) {
    const value = field.value.trim();
    const type = field.type;
    let isValid = true;
    let errorMessage = '';

    // 必填验证
    if (field.hasAttribute('required') && !value) {
      isValid = false;
      errorMessage = '此字段为必填项';
    }
    
    // 邮箱验证
    else if (type === 'email' && value) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        isValid = false;
        errorMessage = '请输入有效的邮箱地址';
      }
    }
    
    // 最小长度验证
    else if (field.hasAttribute('minlength')) {
      const minLength = parseInt(field.getAttribute('minlength'));
      if (value.length < minLength) {
        isValid = false;
        errorMessage = `至少需要${minLength}个字符`;
      }
    }

    this.setFieldError(field, isValid, errorMessage);
    return isValid;
  }

  /**
   * 设置字段错误状态
   */
  setFieldError(field, isValid, message) {
    const formField = field.closest('.md-form-field');
    if (!formField) return;

    // 移除现有错误
    this.clearFieldError(field);

    if (!isValid) {
      field.style.borderColor = 'var(--md-error)';
      
      const errorElement = document.createElement('div');
      errorElement.className = 'md-error';
      errorElement.textContent = message;
      formField.appendChild(errorElement);
    }
  }

  /**
   * 清除字段错误状态
   */
  clearFieldError(field) {
    const formField = field.closest('.md-form-field');
    if (!formField) return;

    field.style.borderColor = '';
    const errorElement = formField.querySelector('.md-error');
    if (errorElement) {
      errorElement.remove();
    }
  }

  /**
   * 验证整个表单
   */
  validateForm(form) {
    const inputs = form.querySelectorAll('.md-form-field__input');
    let isFormValid = true;

    inputs.forEach(input => {
      if (!this.validateField(input)) {
        isFormValid = false;
      }
    });

    if (isFormValid) {
      this.submitForm(form);
    }
  }

  /**
   * 提交表单
   */
  submitForm(form) {
    const submitButton = form.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    
    // 显示加载状态
    submitButton.innerHTML = '<span class="md-loading"></span> 提交中...';
    submitButton.disabled = true;

    // 模拟表单提交
    setTimeout(() => {
      // 显示成功消息
      this.showMessage('表单提交成功！', 'success');
      
      // 重置表单
      form.reset();
      
      // 恢复按钮状态
      submitButton.textContent = originalText;
      submitButton.disabled = false;
    }, 2000);
  }

  /**
   * 显示消息
   */
  showMessage(message, type = 'info') {
    const messageElement = document.createElement('div');
    messageElement.className = `md-message md-message--${type}`;
    messageElement.textContent = message;
    
    // 添加样式
    Object.assign(messageElement.style, {
      position: 'fixed',
      top: '80px',
      right: '24px',
      padding: '16px 24px',
      borderRadius: '4px',
      color: 'white',
      backgroundColor: type === 'success' ? 'var(--md-success)' : 'var(--md-primary)',
      boxShadow: 'var(--md-elevation-2)',
      zIndex: '1001',
      transform: 'translateX(100%)',
      transition: 'transform 0.3s ease-in-out'
    });

    document.body.appendChild(messageElement);

    // 显示动画
    setTimeout(() => {
      messageElement.style.transform = 'translateX(0)';
    }, 100);

    // 自动隐藏
    setTimeout(() => {
      messageElement.style.transform = 'translateX(100%)';
      setTimeout(() => {
        messageElement.remove();
      }, 300);
    }, 3000);
  }

  /**
   * 设置懒加载
   */
  setupLazyLoading() {
    if (!('IntersectionObserver' in window)) return;

    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.classList.remove('lazy');
          imageObserver.unobserve(img);
        }
      });
    }, {
      rootMargin: '50px 0px',
      threshold: 0.01
    });

    const lazyImages = document.querySelectorAll('img[data-src]');
    lazyImages.forEach(img => imageObserver.observe(img));
  }

  /**
   * 设置无障碍功能
   */
  setupAccessibility() {
    // 为所有交互元素添加适当的ARIA标签
    const buttons = document.querySelectorAll('button:not([aria-label]):not([aria-labelledby])');
    buttons.forEach(button => {
      if (!button.getAttribute('aria-label') && !button.textContent.trim()) {
        button.setAttribute('aria-label', '按钮');
      }
    });

    // 为图片添加alt属性
    const images = document.querySelectorAll('img:not([alt])');
    images.forEach(img => {
      img.setAttribute('alt', '图片');
    });

    // 键盘导航支持
    document.addEventListener('keydown', (e) => {
      // Tab键导航
      if (e.key === 'Tab') {
        document.body.classList.add('keyboard-navigation');
      }
    });

    // 鼠标导航时移除键盘导航样式
    document.addEventListener('mousedown', () => {
      document.body.classList.remove('keyboard-navigation');
    });
  }

  /**
   * 工具方法：节流函数
   */
  throttle(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

  /**
   * 工具方法：防抖函数
   */
  debounce(func, wait, immediate) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        timeout = null;
        if (!immediate) func(...args);
      };
      const callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func(...args);
    };
  }
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', () => {
  new MaterialDesign();
});

// 导出供其他脚本使用
window.MaterialDesign = MaterialDesign;
