/**
 * 添加提示音到元素
 * 使用方法：
 * v-audio="1"
 *
 */

import { addClass, removeClass } from '@/scripts/dom';

const version = '1.0.0';

const audioContextHandler = (el, params) => {
  if (!window.AudioContext) {
    return;
  }

  // 创建新的音频上下文接口
  const audioCtx = new AudioContext();

  // 发出的声音频率数据，表现为音调的高低
  const arrFrequency = [
    196.0,
    220.0,
    246.94,
    261.63,
    293.66,
    329.63,
    349.23,
    392.0,
    440.0,
    493.88,
    523.25,
    587.33,
    659.25,
    698.46,
    783.99,
    880.0,
    987.77,
    1046.5,
  ];

  // 音调依次递增或者递减处理需要的参数
  const start = params.index || 0;
  //   let direction = 1;

  const bindfun = () => {
    // 当前频率
    const frequency = arrFrequency[start];
    // 如果到头，改变音调的变化规则（增减切换）
    // if (!frequency) {
    //   direction = -direction;
    //   start += 2 * direction;
    //   frequency = arrFrequency[start];
    // }
    // // 改变索引，下一次hover时候使用
    // start += direction;

    // 创建一个OscillatorNode, 它表示一个周期性波形（振荡），基本上来说创造了一个音调
    const oscillator = audioCtx.createOscillator();
    // 创建一个GainNode,它可以控制音频的总音量
    const gainNode = audioCtx.createGain();
    // 把音量，音调和终节点进行关联
    oscillator.connect(gainNode);
    // audioCtx.destination返回AudioDestinationNode对象，表示当前audio context中所有节点的最终节点，一般表示音频渲染设备
    gainNode.connect(audioCtx.destination);
    // 指定音调的类型，其他还有square|triangle|sawtooth
    oscillator.type = 'sine';
    // 设置当前播放声音的频率，也就是最终播放声音的调调
    oscillator.frequency.value = frequency;
    // 当前时间设置音量为0
    gainNode.gain.setValueAtTime(0, audioCtx.currentTime);
    // 0.01秒后音量为1
    gainNode.gain.linearRampToValueAtTime(1, audioCtx.currentTime + 0.01);
    // 音调从当前时间开始播放
    oscillator.start(audioCtx.currentTime);
    const ct = audioCtx.currentTime + 2;
    // 1秒内声音慢慢降低，是个不错的停止声音的方法
    gainNode.gain.exponentialRampToValueAtTime(0.001, ct);
    // 1秒后完全停止声音
    oscillator.stop(audioCtx.currentTime + 2);
  };

  // 鼠标hover我们的按钮的时候
  el.addEventListener(params.type || 'mouseenter', bindfun);
};

const audio = {
  bind(el) {
    addClass(el, 'vue-directives-audio');
  },
  inserted(el, binding) {
    // if (binding.value) el.focus()
    // else el.blur()
    audioContextHandler(el, binding.value);
  },

  componentUpdated(el, binding) {
    if (binding.modifiers.lazy) {
      if (Boolean(binding.value) === Boolean(binding.oldValue)) {
        return;
      }
    }

    if (binding.value) el.focus();
    else el.blur();
  },
  unbind(el) {
    removeClass(el, 'vue-directives-audio');
  },
};

const mixin = {
  directives: {
    audio,
  },
};
export { version, audio, mixin };
