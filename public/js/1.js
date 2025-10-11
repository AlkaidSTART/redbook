(function setRemBase() {
  // 配置项：可根据需求修改
  const config = {
    designWidth: 750, // 设计稿宽度（默认750px，可改为你的设计稿尺寸）
    baseDivision: 10, // 屏幕宽度等分份数（默认10份，决定基础rem大小）
    isAdaptDesign: false // 是否优先适配设计稿（true=适配设计稿，false=基础等分）
  };

  // 计算根元素font-size的核心函数
  function calculateRem() {
    const viewportWidth = window.innerWidth; // 获取当前屏幕宽度（430px）
    let remBase;

    if (config.isAdaptDesign) {
      // 模式1：适配设计稿（1rem = 设计稿100px）
      remBase = (viewportWidth / config.designWidth) * 100;
    } else {
      // 模式2：基础等分（1rem = 屏幕宽度/10 = 43px）
      remBase = viewportWidth / config.baseDivision;
    }

    // 设置根元素font-size，限制最小值避免过小
    document.documentElement.style.fontSize = Math.max(remBase, 32) + 'px';
  }

  // 初始化执行一次
  calculateRem();

  // 监听屏幕旋转/窗口大小变化，实时更新（应对特殊场景）
  window.addEventListener('resize', calculateRem);

  // 暴露配置项到window，方便后续调试时修改（可选）
  window.remConfig = config;
})();
