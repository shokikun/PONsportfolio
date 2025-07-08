document.addEventListener('DOMContentLoaded', function () {
    var main = new Splide('#main-carousel', {
        type: 'fade',
        rewind: true,
        pagination: false,
        arrows: false,
        cover: true,
        heightRatio: 0.5,
        autoplay: {
            speed: 3,
        },
    });

    var thumbnails = new Splide('#thumbnail-carousel', {
        fixedWidth: 100,
        fixedHeight: 60,
        gap: 10,
        rewind: true,
        pagination: false,
        cover: true,
        isNavigation: true,
        focus: 'center',
        breakpoints: {
            600: {
                fixedWidth: 60,
                fixedHeight: 44,
            },
        },
        autoplay: {
            speed: 3,
        },
        arrows: false,
    });

    main.sync(thumbnails);
    main.mount();
    thumbnails.mount();

    // 🔽 キャプション配列を用意
    const captions = [
        {
            title: "「ゲームってさ人を繋げるきっかけであり、もっともっと楽しくするツール。最高の世界なんだよね」",
            subtitle: "かぐや様は告らせたい～天才達の恋愛頭脳戦～ より"
        },
        {
            title: "「死ぬのは簡単だ。生きるのはそれよりずっと難しい」",
            subtitle: " 鬱先生様 より"
        },
        {
            title: "「縋り付いてきた手を振り払わない様に、私だけは目を開けていたい」",
            subtitle: "呪術廻戦 より"
        },
        {
            title: "「未来を予測する最善の方法は、それを開発することだ。」",
            subtitle: "アラン・ケイ様 より"
        },
        {
            title: "「「シスター」とは「生き様」であり「役職」を指すのではない」",
            subtitle: "シスター・クレア様 より"
        },
        {
            title: "「お前たちは常に ”未来のお前”の過去なわけ。」",
            subtitle: "でびでび・でびる様 より"
        },
        {
            title: "「ここだよ、ここ！私のまな板の胸が鳴ってるだろ！？」",
            subtitle: "星街すいせい様 より"
        },
        {
            title: "「痛みは一時的、栄光は永遠に残る」",
            subtitle: "モハメド・ファラー様 より"
        }
    ];

    // 🔽 テキストを差し替える関数
    function updateCaption(index) {
        const caption = captions[index];
        document.getElementById('caption-title').textContent = caption.title;
        document.getElementById('caption-subtitle').textContent = caption.subtitle;
    }

    // 🔽 初期キャプション
    updateCaption(0);

    // 🔽 スライドが切り替わったらキャプションも更新
    main.on('moved', function (newIndex) {
        updateCaption(newIndex);
    });
});


window.addEventListener('DOMContentLoaded', () => {
    const loading = document.querySelector('.loading');
    const spinner = document.querySelector('.spinner-box');
    const videoWrapper = document.querySelector('.video-wrapper');
    const video = document.getElementById('main-video');
    const audio = document.getElementById('main-audio');
    const yesBtn = document.querySelector('.YES-man');
    const noBtn = document.querySelector('.NO-man');

    // 🔹 最初は videoWrapper を非表示にしておく（CSS でもOK）
    yesBtn.style.display = 'none';
    noBtn.style.display = 'none';
    videoWrapper.style.display = 'none';



    // スピナー終了タイミング
    setTimeout(() => {
        spinner.style.transition = 'opacity 0.5s';
        spinner.style.opacity = '0';

        setTimeout(() => {
            spinner.style.display = 'none';

            // 🔸 ここで動画（サムネ）を表示
            videoWrapper.style.display = 'block';
            videoWrapper.style.opacity = '1';

        }, 500); // スピナーが消えるアニメーション完了後

        yesBtn.style.display = 'block';
        yesBtn.style.opacity = '1';
        noBtn.style.display = 'block';
        noBtn.style.opacity = '1';
    }, 3000); // スピナー表示時間（お好みで）

    // YESクリックで再生処理
    if (yesBtn) {
        yesBtn.addEventListener('click', () => {
            if (video && audio) {
                video.muted = false;
                yesBtn.style.display = 'none';
                noBtn.style.display = 'none';


                video.play();
                audio.play();

                video.addEventListener('playing', () => {
                    setTimeout(() => {
                        videoWrapper.style.transition = 'opacity 1s ease';
                        videoWrapper.style.opacity = '0';

                        setTimeout(() => {
                            videoWrapper.style.display = 'none';
                            loading.style.display = 'none';
                        }, 1000);
                    }, 2500);
                }, { once: true });
            }
        });
    }
});








$(window).scroll(function () {
    $('.fadein').each(function () {
        var elemPos = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();

        if (scroll > elemPos - windowHeight + 100 && scroll < elemPos + $(this).outerHeight()) {
            $(this).addClass('scrollin');
        } else {
            $(this).removeClass('scrollin');
        }
    });
});

'use strict';

/* audio・video 音量初期値の設定 */
const mediasVol_def = function () {
    //範囲： 0〜1 の間　※初期値=1(100%の最大)

    //audioの数だけ全部音量0.5(=50%)
    const audios = document.getElementsByTagName('main-audio');
    const len1 = audios.length;
    for (let n = 0; n > len1; n++) audios[n].volume = 0.5;

    /*- - - - - -下記は なければ削除して可 - - - - - -*/
    // 特定のidのaudioの音量設定
    const a1 = document.getElementById('main-audio'); //('a1')の a1は例
    a1.volume = 0.1; // 0〜1 の間で
    //2コ以上あるときは下記のように記述していく
    //const a2=document.getElementById('a2');
    //a2.volume=0.7; //例  

    //特定のidのvideoの音量設定
    const v1 = document.getElementById('v1'); //('v1')の v1は例
    v1.volume = 0.6; // 0〜1 の間で
    //2コ以上あるとき 以下略 
    /*- - - - - - - - - - - - - - - - - - - - - - -*/
}
//ページ読み込み時に処理
window.addEventListener('DOMContentLoaded', function () {
    mediasVol_def();
}, false);



document.addEventListener("DOMContentLoaded", () => {
    const target = document.querySelector(".c07");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                target.classList.add("active");

                // 再びアニメーションを実行するために短時間でクラスを削除
                setTimeout(() => {
                    target.classList.remove("active");
                }, 2000); // 2秒後にリセット
            }
        });
    });

    observer.observe(target);
});
