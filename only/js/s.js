// 打字效果
const typingTexts = ["", ".", "..", "..."];
let typingIndex = 0;
const typingElement = document.querySelector('.typing-effect');

function typeWriter() {
	typingElement.textContent = typingTexts[typingIndex];
	typingIndex = (typingIndex + 1) % typingTexts.length;
	setTimeout(typeWriter, 500);
}

typeWriter();

// 树洞精灵互动
const treeholeSpirit = document.getElementById('treeholeSpirit');
const spiritMessage = document.getElementById('spiritMessage');

treeholeSpirit.addEventListener('click', function() {
	spiritMessage.classList.toggle('show');

	// 随机精灵消息
	const messages = [
		"每个人都需要一个倾听者，我很荣幸成为你的那个~",
		"你的感受很重要，我在这里认真听着呢",
		"分享本身就是一种勇气，为你骄傲",
		"无论快乐还是悲伤，都值得被诉说",
		"你知道吗？倾诉是自我疗愈的第一步"
	];

	spiritMessage.innerHTML = messages[Math.floor(Math.random() * messages.length)];
});

// 鼓励泡泡
const encouragementBubble = document.getElementById('encouragementBubble');
const encouragementMessage = document.getElementById('encouragementMessage');

encouragementBubble.addEventListener('click', function() {
	encouragementMessage.classList.toggle('show');

	// 随机鼓励语
	const encouragements = [
		"你比自己想象的更勇敢！❤️",
		"今天也为坚持到现在的你鼓掌👏",
		"你的感受是合理的，我理解你",
		"每一个小进步都值得庆祝🎉",
		"你并不孤单，我在这里陪着你",
		"照顾好自己是最重要的🌱",
		"你的故事对我很重要"
	];

	encouragementMessage.innerHTML = encouragements[Math.floor(Math.random() * encouragements.length)];

	// 自动隐藏
	setTimeout(() => {
		encouragementMessage.classList.remove('show');
	}, 3000);
});

// 心情选择
const moodOptions = document.querySelectorAll('.mood-option');
const selectedMood = document.getElementById('selectedMood');

moodOptions.forEach(option => {
	option.addEventListener('click', function() {
		moodOptions.forEach(opt => opt.classList.remove('selected'));
		this.classList.add('selected');
		selectedMood.value = this.dataset.mood;
	});
});

// 文本情感分析
const textarea = document.getElementById('your-message');
const sentimentAnalysis = document.getElementById('sentimentAnalysis');
const sentimentResult = document.getElementById('sentimentResult');

textarea.addEventListener('input', function() {
	if (this.value.length > 50) {
		sentimentAnalysis.style.display = 'block';

		// 简单的情感分析
		const text = this.value.toLowerCase();
		let sentiment = '复杂';

		if (text.includes('开心') || text.includes('高兴') || text.includes('快乐') ||
			text.includes('幸福') || text.includes('喜欢') || text.includes('爱')) {
			sentiment = '快乐';
		} else if (text.includes('难过') || text.includes('伤心') || text.includes('痛苦') ||
			text.includes('哭泣') || text.includes('孤独')) {
			sentiment = '悲伤';
		} else if (text.includes('生气') || text.includes('愤怒') || text.includes('讨厌') ||
			text.includes('恨') || text.includes('烦')) {
			sentiment = '愤怒';
		} else if (text.includes('困惑') || text.includes('迷茫') || text.includes('不知道') ||
			text.includes('怎么办') || text.includes('选择')) {
			sentiment = '困惑';
		} else if (text.includes('压力') || text.includes('累') || text.includes('疲惫') ||
			text.includes('困') || text.includes('倦')) {
			sentiment = '疲惫';
		}

		sentimentResult.textContent = sentiment;
	} else {
		sentimentAnalysis.style.display = 'none';
	}

	// 更新进度条
	const progressBar = document.getElementById('progressBar');
	const progress = Math.min(this.value.length / 1000 * 100, 100);
	progressBar.style.width = `${progress}%`;
});

// 秘密花园
const secretGardenBtn = document.getElementById('secretGardenBtn');
const gardenContent = document.getElementById('gardenContent');

secretGardenBtn.addEventListener('click', function() {
	gardenContent.style.display = gardenContent.style.display === 'block' ? 'none' : 'block';
	this.innerHTML = gardenContent.style.display === 'block' ?
		'<i class="fas fa-times"></i> 关闭秘密花园' :
		'<i class="fas fa-seedling"></i> 点击进入秘密花园';
});

// 花朵点击效果
const flowers = document.querySelectorAll('.flower');
const flowerMessages = [
	"今天吃到了超好吃的冰淇淋！",
	"和好朋友聊到凌晨三点",
	"终于完成了拖延很久的项目",
	"看到了一只超可爱的流浪猫",
	"收到了意外的惊喜礼物",
	"阳光正好，微风不燥",
	"读到了一本改变我想法的书",
	"学会了一道新菜，味道很棒",
	"清晨听到了鸟叫声，心情很好",
	"帮助了一个陌生人，感觉很温暖"
];

flowers.forEach(flower => {
	flower.addEventListener('click', function() {
		const messageElement = this.querySelector('.flower-message');
		messageElement.textContent = flowerMessages[Math.floor(Math.random() * flowerMessages.length)];

		// 随机颜色
		const colors = ['#ff6b6b', '#ffa502', '#2ed573', '#1e90ff', '#a55eea', '#fd79a8'];
		this.querySelector('i').style.color = colors[Math.floor(Math.random() * colors.length)];

		// 动画效果
		this.style.transform = 'scale(1.3)';
		setTimeout(() => {
			this.style.transform = 'scale(1)';
		}, 300);
	});
});

// 表单提交
document.getElementById('treeholeForm').addEventListener('submit', function(e) {
	e.preventDefault();

	// 表单验证
	const requiredFields = ['message-type', 'your-message'];
	let isValid = true;

	requiredFields.forEach(fieldId => {
		const field = document.getElementById(fieldId);
		if (!field.value.trim()) {
			field.style.borderColor = '#e74c3c';
			isValid = false;
		} else {
			field.style.borderColor = '#e0e6ed';
		}
	});

	if (!isValid) {
		alert('请填写所有必填字段');
		return;
	}

	const submitBtn = this.querySelector('button[type="submit"]');
	const originalText = submitBtn.innerHTML;

	// 显示加载状态
	submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> 发送中...';
	submitBtn.disabled = true;

	// 模拟提交延迟
	setTimeout(() => {
		// 显示感谢卡片
		document.getElementById('thankYouCard').classList.add('show');

		// 重置表单
		this.reset();
		moodOptions.forEach(opt => opt.classList.remove('selected'));
		document.getElementById('progressBar').style.width = '0';
		sentimentAnalysis.style.display = 'none';

		// 恢复按钮状态
		submitBtn.innerHTML = originalText;
		submitBtn.disabled = false;
	}, 1500);
});

// 关闭感谢卡片
document.getElementById('closeThankYou').addEventListener('click', function() {
	document.getElementById('thankYouCard').classList.remove('show');
});

// 深呼吸疗法
const breathCircle = document.getElementById('breathCircle');
const breathInstruction = document.getElementById('breathInstruction');
const breathBtn = document.getElementById('breathBtn');
let breathInterval;

breathBtn.addEventListener('click', function() {
	if (breathBtn.textContent === '开始深呼吸') {
		breathBtn.textContent = '停止练习';
		startBreathingExercise();
	} else {
		breathBtn.textContent = '开始深呼吸';
		stopBreathingExercise();
	}
});

function startBreathingExercise() {
	let cycle = 0;
	const totalCycles = 3;

	breathInstruction.textContent = '准备开始，先深吸一口气...';

	breathInterval = setInterval(() => {
		if (cycle >= totalCycles * 2) {
			stopBreathingExercise();
			breathInstruction.textContent = '练习完成！感觉好些了吗？';
			breathBtn.textContent = '开始深呼吸';
			return;
		}

		if (cycle % 2 === 0) {
			// 吸气阶段
			breathCircle.textContent = '吸气';
			breathCircle.style.animation = 'breatheIn 4s forwards';
			breathInstruction.textContent = '慢慢吸气... 1... 2... 3... 4...';
		} else {
			// 呼气阶段
			breathCircle.textContent = '呼气';
			breathCircle.style.animation = 'breatheOut 6s forwards';
			breathInstruction.textContent = '慢慢呼气... 1... 2... 3... 4... 5... 6...';
		}

		cycle++;
	}, 10000); // 每个完整呼吸周期10秒（4秒吸气+6秒呼气）
}

function stopBreathingExercise() {
	clearInterval(breathInterval);
	breathCircle.style.animation = 'none';
	breathCircle.textContent = '深呼吸';
}

// 每日小确幸
const blissList = document.getElementById('blissList');
const blissInput = document.getElementById('blissInput');
const addBlissBtn = document.getElementById('addBlissBtn');

addBlissBtn.addEventListener('click', addBliss);
blissInput.addEventListener('keypress', function(e) {
	if (e.key === 'Enter') {
		addBliss();
	}
});

function addBliss() {
	const text = blissInput.value.trim();
	if (text) {
		const icons = ['fa-smile', 'fa-heart', 'fa-coffee', 'fa-sun', 'fa-music', 'fa-book', 'fa-utensils'];
		const randomIcon = icons[Math.floor(Math.random() * icons.length)];

		const li = document.createElement('li');
		li.className = 'bliss-item';
		li.innerHTML = `<i class="fas ${randomIcon}"></i> ${text}`;
		blissList.appendChild(li);

		blissInput.value = '';
	}
}

// 心情日记
const diaryGrid = document.getElementById('diaryGrid');
const moods = [{
		icon: 'fa-laugh-beam',
		name: '开心',
		color: '#ff6b6b'
	},
	{
		icon: 'fa-smile',
		name: '平静',
		color: '#2ed573'
	},
	{
		icon: 'fa-meh',
		name: '一般',
		color: '#ffa502'
	},
	{
		icon: 'fa-frown',
		name: '低落',
		color: '#1e90ff'
	},
	{
		icon: 'fa-sad-tear',
		name: '难过',
		color: '#a55eea'
	},
	{
		icon: 'fa-angry',
		name: '生气',
		color: '#e74c3c'
	},
	{
		icon: 'fa-tired',
		name: '疲惫',
		color: '#7f8c8d'
	}
];

// 生成最近7天的心情记录
for (let i = 6; i >= 0; i--) {
	const date = new Date();
	date.setDate(date.getDate() - i);

	const dayElement = document.createElement('div');
	dayElement.className = 'diary-day';

	const randomMood = moods[Math.floor(Math.random() * moods.length)];

	dayElement.innerHTML = `
    <div>${date.getDate()}/${date.getMonth() + 1}</div>
    <i class="fas ${randomMood.icon}" style="color: ${randomMood.color}"></i>
    <div>${randomMood.name}</div>
  `;

	diaryGrid.appendChild(dayElement);
}

// 冥想音乐
const musicSelect = document.getElementById('musicSelect');
const playBtn = document.getElementById('playBtn');
const musicProgress = document.getElementById('musicProgress');
let isPlaying = false;

playBtn.addEventListener('click', function() {
	if (isPlaying) {
		pauseMusic();
	} else {
		playMusic();
	}
});

function playMusic() {
	isPlaying = true;
	playBtn.innerHTML = '<i class="fas fa-pause"></i>';

	// 模拟音乐播放进度
	let progress = 0;
	const progressInterval = setInterval(() => {
		if (progress >= 100) {
			clearInterval(progressInterval);
			pauseMusic();
			return;
		}

		progress += 0.5;
		musicProgress.style.width = `${progress}%`;

		if (!isPlaying) {
			clearInterval(progressInterval);
		}
	}, 100);
}

function pauseMusic() {
	isPlaying = false;
	playBtn.innerHTML = '<i class="fas fa-play"></i>';
}

// 心灵鸡汤
const quoteText = document.getElementById('quoteText');
const newQuoteBtn = document.getElementById('newQuoteBtn');

const quotes = [
	"生活不会辜负每一个努力的人。",
	"今天的努力，是明天的幸运。",
	"保持微笑，好运自然来。",
	"你值得拥有最好的，因为你本身就是最好的。",
	"每一个不曾起舞的日子，都是对生命的辜负。",
	"生活就像一面镜子，你对它笑，它就对你笑。",
	"困难只是暂时的，放弃才是永远的。",
	"你比自己想象的更强大。",
	"每天进步一点点，未来可期。",
	"善待自己，因为你是独一无二的。"
];

newQuoteBtn.addEventListener('click', function() {
	quoteText.textContent = quotes[Math.floor(Math.random() * quotes.length)];
});

// 树洞精灵对话框
const spiritDialog = document.getElementById('spiritDialog');
const spiritDialogClose = document.getElementById('spiritDialogClose');
const spiritDialogContent = document.getElementById('spiritDialogContent');

// 随机显示对话框
setTimeout(() => {
	spiritDialog.classList.add('show');
}, 5000);

spiritDialogClose.addEventListener('click', function() {
	spiritDialog.classList.remove('show');
});

// 精灵对话内容
const dialogs = [
	"今天有什么想和我分享的吗？",
	"记得照顾好自己哦~",
	"你最近过得怎么样？",
	"有什么烦恼都可以告诉我",
	"我在这里陪着你"
];

setInterval(() => {
	if (spiritDialog.classList.contains('show')) {
		spiritDialogContent.textContent = dialogs[Math.floor(Math.random() * dialogs.length)];
	}
}, 10000);