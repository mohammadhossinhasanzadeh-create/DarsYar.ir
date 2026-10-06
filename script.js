/* =========================================================
   درس‌یار
   سیستم آموزشی پایه سوم تا هفتم
========================================================= */


/* =========================================================
   وضعیت
========================================================= */

let currentGrade = null;
let currentSubject = null;
let currentChapter = null;
let currentPage = null;


/* =========================================================
   پایه‌ها
========================================================= */

const grades = {

    3: {
        title: "پایه سوم ابتدایی",
        icon: "🥉",
        subjects: [
            "ریاضی",
            "فارسی",
            "علوم تجربی",
            "مطالعات اجتماعی",
            "هدیه‌های آسمان",
            "قرآن"
        ]
    },

    4: {
        title: "پایه چهارم ابتدایی",
        icon: "🏅",
        subjects: [
            "ریاضی",
            "فارسی",
            "علوم تجربی",
            "مطالعات اجتماعی",
            "هدیه‌های آسمان",
            "قرآن"
        ]
    },

    5: {
        title: "پایه پنجم ابتدایی",
        icon: "🎖️",
        subjects: [
            "ریاضی",
            "فارسی",
            "علوم تجربی",
            "مطالعات اجتماعی",
            "هدیه‌های آسمان",
            "قرآن"
        ]
    },

    6: {
        title: "پایه ششم ابتدایی",
        icon: "🏆",
        subjects: [
            "ریاضی",
            "فارسی",
            "علوم تجربی",
            "مطالعات اجتماعی",
            "هدیه‌های آسمان",
            "قرآن"
        ]
    },

    7: {
        title: "پایه هفتم",
        icon: "🚀",
        subjects: [
            "ریاضی",
            "علوم تجربی",
            "فارسی",
            "نگارش",
            "مطالعات اجتماعی",
            "پیام‌های آسمان",
            "عربی",
            "انگلیسی",
            "کار و فناوری"
        ]
    }

};


/* =========================================================
   فصل‌های ریاضی
========================================================= */

const mathChapters = {

    3: [
        "الگوها",
        "عددهای چهار رقمی",
        "عددهای کسری",
        "ضرب و تقسیم",
        "محیط و مساحت",
        "جمع و تفریق",
        "آمار و احتمال",
        "ضرب و تقسیم چند رقمی"
    ],

    4: [
        "اعداد و الگوها",
        "کسر",
        "ضرب و تقسیم",
        "اندازه‌گیری",
        "عدد مخلوط",
        "شکل‌های هندسی",
        "آمار و احتمال"
    ],

    5: [
        "عددنویسی و الگوها",
        "کسر",
        "نسبت، تناسب و درصد",
        "تقارن و چندضلعی‌ها",
        "عددهای اعشاری",
        "اندازه‌گیری",
        "آمار و احتمال"
    ],

    6: [
        "عدد و الگوهای عددی",
        "کسر",
        "اعداد اعشاری",
        "تقارن و مختصات",
        "اندازه‌گیری",
        "تناسب و درصد",
        "تقریب",
        "آمار و احتمال"
    ],

    7: [
        "راهبردهای حل مسئله",
        "عددهای صحیح",
        "جبر و عبارت‌های جبری",
        "هندسه و استدلال",
        "شمارنده‌ها و اعداد اول",
        "سطح و حجم",
        "توان و جذر",
        "بردار و مختصات",
        "آمار و احتمال"
    ]

};


/* =========================================================
   بانک ویدیوهای واقعی
========================================================= */

const VIDEO_DATABASE = [

    /* =========================================
       ریاضی هفتم - فصل اول
    ========================================= */

    {
        grade: 7,
        subject: "ریاضی",
        chapter: "راهبردهای حل مسئله",
        pages: [1, 2],
        title: "ریاضی هفتم فصل اول - صفحه ۱ و ۲",
        description: "آموزش و حل صفحات ۱ و ۲ فصل اول",
        url: "https://aparat.com/v/nvYrX",
        source: "بانی‌لرن"
    },

    {
        grade: 7,
        subject: "ریاضی",
        chapter: "راهبردهای حل مسئله",
        pages: [3],
        title: "ریاضی هفتم فصل اول - صفحه ۳",
        description: "آموزش و حل صفحه ۳",
        url: "https://aparat.com/v/fUCwc",
        source: "بانی‌لرن"
    },

    {
        grade: 7,
        subject: "ریاضی",
        chapter: "راهبردهای حل مسئله",
        pages: [4],
        title: "ریاضی هفتم فصل اول - صفحه ۴",
        description: "آموزش و حل صفحه ۴",
        url: "https://aparat.com/v/r0l5W",
        source: "بانی‌لرن"
    },

    {
        grade: 7,
        subject: "ریاضی",
        chapter: "راهبردهای حل مسئله",
        pages: [5],
        title: "ریاضی هفتم فصل اول - صفحه ۵",
        description: "آموزش و حل صفحه ۵",
        url: "https://aparat.com/v/SGMWy",
        source: "بانی‌لرن"
    },

    {
        grade: 7,
        subject: "ریاضی",
        chapter: "راهبردهای حل مسئله",
        pages: [6],
        title: "ریاضی هفتم فصل اول - صفحه ۶",
        description: "آموزش و حل صفحه ۶",
        url: "https://aparat.com/v/jETpb",
        source: "بانی‌لرن"
    },

    {
        grade: 7,
        subject: "ریاضی",
        chapter: "راهبردهای حل مسئله",
        pages: [7],
        title: "ریاضی هفتم فصل اول - صفحه ۷",
        description: "آموزش و حل صفحه ۷",
        url: "https://aparat.com/v/0CizM",
        source: "بانی‌لرن"
    },

    {
        grade: 7,
        subject: "ریاضی",
        chapter: "راهبردهای حل مسئله",
        pages: [8],
        title: "ریاضی هفتم فصل اول - صفحه ۸",
        description: "آموزش و حل صفحه ۸",
        url: "https://aparat.com/v/yFIiV",
        source: "بانی‌لرن"
    },

    {
        grade: 7,
        subject: "ریاضی",
        chapter: "راهبردهای حل مسئله",
        pages: [9],
        title: "ریاضی هفتم فصل اول - صفحه ۹",
        description: "آموزش و حل صفحه ۹",
        url: "https://aparat.com/v/cHpdL",
        source: "بانی‌لرن"
    },

    {
        grade: 7,
        subject: "ریاضی",
        chapter: "راهبردهای حل مسئله",
        pages: [10],
        title: "ریاضی هفتم فصل اول - صفحه ۱۰",
        description: "آموزش و حل صفحه ۱۰",
        url: "https://aparat.com/v/OZcK5",
        source: "بانی‌لرن"
    },

    {
        grade: 7,
        subject: "ریاضی",
        chapter: "راهبردهای حل مسئله",
        pages: [11],
        title: "ریاضی هفتم فصل اول - صفحه ۱۱",
        description: "آموزش و حل صفحه ۱۱",
        url: "https://aparat.com/v/8fmqJ",
        source: "بانی‌لرن"
    },

    {
        grade: 7,
        subject: "ریاضی",
        chapter: "راهبردهای حل مسئله",
        pages: [12],
        title: "ریاضی هفتم فصل اول - صفحه ۱۲",
        description: "آموزش و حل صفحه ۱۲",
        url: "https://aparat.com/v/JKApl",
        source: "بانی‌لرن"
    },


    /* =========================================
       ریاضی هفتم - فصل اول منبع دوم
    ========================================= */

    {
        grade: 7,
        subject: "ریاضی",
        chapter: "راهبردهای حل مسئله",
        pages: [2, 3, 4],
        title: "رسم شکل، الگوسازی و حذف حالت نامطلوب",
        description: "فصل اول ریاضی هفتم - صفحات ۲ تا ۴",
        url: "https://www.aparat.com/v/82rze?playlist=538731",
        source: "آموزش ریاضی"
    },

    {
        grade: 7,
        subject: "ریاضی",
        chapter: "راهبردهای حل مسئله",
        pages: [5, 6, 7],
        title: "الگویابی، حدس و آزمایش",
        description: "فصل اول ریاضی هفتم - صفحات ۵ تا ۷",
        url: "https://www.aparat.com/v/Fcqnb?playlist=538731",
        source: "آموزش ریاضی"
    },


    /* =========================================
       ریاضی هفتم - جبر
    ========================================= */

    {
        grade: 7,
        subject: "ریاضی",
        chapter: "جبر و عبارت‌های جبری",
        pages: [36],
        title: "حل صفحه ۳۶ ریاضی هفتم",
        description: "مقدار عددی عبارت جبری - صفحه ۳۶",
        url: "https://www.aparat.com/v/crmcdu7",
        source: "سارا مصطفایی"
    },

    {
        grade: 7,
        subject: "ریاضی",
        chapter: "جبر و عبارت‌های جبری",
        pages: [37],
        title: "حل صفحه ۳۷ ریاضی هفتم",
        description: "معادله و حدس و آزمایش",
        url: "https://www.aparat.com/v/znc706b",
        source: "سارا مصطفایی"
    },

    {
        grade: 7,
        subject: "ریاضی",
        chapter: "جبر و عبارت‌های جبری",
        pages: [38],
        title: "حل صفحه ۳۸ ریاضی هفتم",
        description: "حل معادله صفحه ۳۸",
        url: "https://www.aparat.com/v/qir2wt1",
        source: "سارا مصطفایی"
    },


    /* =========================================
       ریاضی هفتم - توان و جذر
    ========================================= */

    {
        grade: 7,
        subject: "ریاضی",
        chapter: "توان و جذر",
        pages: [],
        title: "ریاضی هفتم فصل هفتم - توان و جذر",
        description: "آموزش مبحث توان و جذر",
        url: "https://www.aparat.com/v/8UDQB",
        source: "آموزش ریاضی"
    },

    {
        grade: 7,
        subject: "ریاضی",
        chapter: "توان و جذر",
        pages: [],
        title: "حل نمونه سوال فصل هفتم ریاضی هفتم",
        description: "تمرین و مرور توان و جذر",
        url: "https://www.aparat.com/v/akig5d4",
        source: "سارا مصطفایی"
    },


    /* =========================================
       ریاضی هفتم - بردار و مختصات
    ========================================= */

    {
        grade: 7,
        subject: "ریاضی",
        chapter: "بردار و مختصات",
        pages: [101, 102],
        title: "حل فعالیت و کار در کلاس صفحات ۱۰۱ و ۱۰۲",
        description: "بردار و مختصات",
        url: "https://www.aparat.com/v/82rze",
        source: "ریاضی با شامیان"
    },


    /* =========================================
       ریاضی هفتم - نمونه سوال کل کتاب
    ========================================= */

    {
        grade: 7,
        subject: "ریاضی",
        chapter: "آمار و احتمال",
        pages: [],
        title: "حل کامل نمونه سوال ریاضی هفتم",
        description: "مرور فصل‌های ۱ تا ۹",
        url: "https://www.aparat.com/v/ptf54mt",
        source: "سارا مصطفایی"
    },


    /* =========================================
       علوم ششم
    ========================================= */

    {
        grade: 6,
        subject: "علوم تجربی",
        chapter: "درس اول",
        pages: [],
        title: "نمونه سوال علوم ششم",
        description: "مرور و حل نمونه سوال علوم ششم",
        url: "https://www.aparat.com/v/cuzai09",
        source: "سارا مصطفایی"
    },

    {
        grade: 6,
        subject: "علوم تجربی",
        chapter: "درس اول",
        pages: [],
        title: "نمونه سوال علوم ششم - قسمت دوم",
        description: "تمرین و مرور علوم ششم",
        url: "https://www.aparat.com/v/afji679",
        source: "سارا مصطفایی"
    },


    /* =========================================
       ریاضی هفتم - فصل‌های عمومی
    ========================================= */

    {
        grade: 7,
        subject: "ریاضی",
        chapter: "عددهای صحیح",
        pages: [],
        title: "تمرین و مرور عددهای صحیح",
        description: "آموزش و تمرین عددهای صحیح",
        url: "https://www.aparat.com/v/ymf5d4c",
        source: "آموزش آباد"
    },

    {
        grade: 7,
        subject: "ریاضی",
        chapter: "هندسه و استدلال",
        pages: [],
        title: "آموزش هندسه ریاضی هفتم",
        description: "آموزش مفاهیم هندسی",
        url: "https://www.aparat.com/v/ymf5d4c",
        source: "آموزش آباد"
    }

];


/* =========================================================
   آیکون درس
========================================================= */

function getSubjectIcon(subject) {

    const icons = {
        "ریاضی": "📐",
        "فارسی": "📖",
        "علوم تجربی": "🔬",
        "مطالعات اجتماعی": "🌍",
        "هدیه‌های آسمان": "🌙",
        "قرآن": "📗",
        "نگارش": "✍️",
        "پیام‌های آسمان": "☁️",
        "عربی": "🕌",
        "انگلیسی": "🔤",
        "کار و فناوری": "💻"
    };

    return icons[subject] || "📚";
}


/* =========================================================
   نمایش پایه‌ها
========================================================= */

function renderGrades() {

    const grid =
        document.getElementById("gradeGrid");

    grid.innerHTML = "";

    Object.keys(grades).forEach(grade => {

        const data = grades[grade];

        const card =
            document.createElement("div");

        card.className = "card";

        card.innerHTML = `

            <div class="cardIcon">
                ${data.icon}
            </div>

            <div class="gradeNumber">
                ${grade}
            </div>

            <h3>
                ${data.title}
            </h3>

            <p>
                ${data.subjects.length}
                درس آموزشی
            </p>

        `;

        card.onclick =
            () => openGrade(Number(grade));

        grid.appendChild(card);

    });
}


/* =========================================================
   باز کردن پایه
========================================================= */

function openGrade(grade) {

    currentGrade = grade;

    currentSubject = null;
    currentChapter = null;
    currentPage = null;

    hideAllPages();

    document
        .getElementById("gradePage")
        .classList.remove("hidden");

    document
        .getElementById("gradeHeader")
        .innerHTML = `

            <div class="pageHeader">

                <h1>
                    ${grades[grade].icon}
                    ${grades[grade].title}
                </h1>

                <p>
                    درس موردنظر را انتخاب کن
                </p>

            </div>
        `;


    const grid =
        document.getElementById("subjectGrid");

    grid.innerHTML = "";


    grades[grade].subjects.forEach(subject => {

        const card =
            document.createElement("div");

        card.className = "card";

        card.innerHTML = `

            <div class="cardIcon">
                ${getSubjectIcon(subject)}
            </div>

            <h3>
                ${subject}
            </h3>

            <p>
                مشاهده فصل‌ها و درس‌ها
            </p>
        `;

        card.onclick =
            () => openSubject(
                grade,
                subject
            );

        grid.appendChild(card);

    });
}


/* =========================================================
   باز کردن درس
========================================================= */

function openSubject(
    grade,
    subject
) {

    currentGrade = grade;
    currentSubject = subject;

    hideAllPages();

    document
        .getElementById("subjectPage")
        .classList.remove("hidden");


    document
        .getElementById("subjectHeader")
        .innerHTML = `

            <div class="pageHeader">

                <h1>
                    ${getSubjectIcon(subject)}
                    ${subject}
                </h1>

                <p>
                    پایه ${grade}
                </p>

            </div>
        `;


    const grid =
        document.getElementById("chapterGrid");

    grid.innerHTML = "";


    let chapters = [];


    if (
        subject === "ریاضی" &&
        mathChapters[grade]
    ) {

        chapters =
            mathChapters[grade];

    } else {

        for (
            let i = 1;
            i <= 12;
            i++
        ) {

            chapters.push(
                `درس ${numberToPersian(i)}`
            );

        }

    }


    chapters.forEach(
        (chapter, index) => {

            const card =
                document.createElement("div");

            card.className = "card";

            card.innerHTML = `

                <div class="cardIcon">
                    📚
                </div>

                <h3>
                    ${chapter}
                </h3>

                <p>
                    مشاهده صفحات این بخش
                </p>
            `;

            card.onclick =
                () => openChapter(
                    grade,
                    subject,
                    chapter,
                    index
                );

            grid.appendChild(card);

        }
    );
}


/* =========================================================
   باز کردن فصل
========================================================= */

function openChapter(
    grade,
    subject,
    chapter,
    chapterIndex
) {

    currentGrade = grade;
    currentSubject = subject;
    currentChapter = chapter;

    hideAllPages();

    document
        .getElementById("chapterPage")
        .classList.remove("hidden");


    document
        .getElementById("chapterHeader")
        .innerHTML = `

            <div class="pageHeader">

                <h1>
                    📚 ${chapter}
                </h1>

                <p>
                    ${subject}
                    -
                    پایه ${grade}
                </p>

            </div>
        `;


    const grid =
        document.getElementById("lessonGrid");

    grid.innerHTML = "";


    const pageCount =
        subject === "ریاضی"
            ? 120
            : 30;


    for (
        let page = 1;
        page <= pageCount;
        page++
    ) {

        const card =
            document.createElement("div");

        card.className = "card";

        card.innerHTML = `

            <div class="cardIcon">
                📄
            </div>

            <h3>
                صفحه ${numberToPersian(page)}
            </h3>

            <p>
                آموزش صفحه
                ${numberToPersian(page)}
            </p>

        `;

        card.onclick =
            () => openLesson(
                grade,
                subject,
                chapter,
                page
            );

        grid.appendChild(card);

    }
}


/* =========================================================
   باز کردن صفحه
========================================================= */

function openLesson(
    grade,
    subject,
    chapter,
    page
) {

    currentGrade = grade;
    currentSubject = subject;
    currentChapter = chapter;
    currentPage = page;

    hideAllPages();

    document
        .getElementById("lessonPage")
        .classList.remove("hidden");


    const videos =
        findVideos(
            grade,
            subject,
            chapter,
            page
        );


    let videoHTML = `

        <div class="videosTitle">

            <h2>
                🎬 ویدیوهای آموزشی
            </h2>

        </div>

        <div class="videoNotice">

            ویدیوهای زیر بر اساس میزان ارتباط
            با صفحه و فصل انتخاب شده‌اند.

            <br>

            اول ویدیوهای مخصوص همین صفحه،
            سپس ویدیوهای همان فصل و در آخر
            ویدیوهای مرتبط همان درس نمایش داده می‌شوند.

        </div>

        <div class="videoGrid">

    `;


    videos.forEach(
        (video, index) => {

            videoHTML += `

                <div class="videoCard">

                    <div class="videoNumber">
                        ${index + 1}
                    </div>

                    <h3>
                        ${video.title}
                    </h3>

                    <p>
                        ${video.description}
                    </p>

                    <p>
                        📚 ${video.source}
                    </p>

                    <a
                        class="videoButton"
                        href="${video.url}"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        ▶ مشاهده ویدیو
                    </a>

                </div>

            `;
        }
    );


    videoHTML += `
        </div>
    `;


    document
        .getElementById("lessonContent")
        .innerHTML = `

            <div class="lesson">

                <h1>
                    ${subject}
                    -
                    صفحه
                    ${numberToPersian(page)}
                </h1>


                <div class="infoBox">

                    <strong>
                        پایه:
                    </strong>

                    ${grade}

                    <br>

                    <strong>
                        فصل:
                    </strong>

                    ${chapter}

                </div>


                <h2>
                    📌 خلاصه درس
                </h2>

                <p>
                    در این صفحه مطالب مربوط به
                    ${subject}
                    در بخش
                    «${chapter}»
                    را بررسی می‌کنیم.
                </p>


                <h2>
                    👨‍🏫 آموزش کوتاه
                </h2>

                <p>
                    ابتدا مفهوم اصلی را بخوان،
                    سپس مثال‌های کتاب را بررسی کن
                    و در پایان ویدیوهای آموزشی
                    را ببین.
                </p>


                <h2>
                    📚 توضیح بیشتر
                </h2>

                <p>
                    اگر قسمتی از درس را متوجه نشدی،
                    از ویدیوهای پایین صفحه استفاده کن.
                    ویدیوهای دقیق صفحه در اول لیست
                    قرار می‌گیرند.
                </p>


                ${videoHTML}

            </div>
        `;
}


/* =========================================================
   سیستم هوشمند پیدا کردن ویدیو
========================================================= */

function findVideos(
    grade,
    subject,
    chapter,
    page
) {

    /* 1 - ویدیوی دقیق همان صفحه */

    const exact =
        VIDEO_DATABASE.filter(video =>

            video.grade === grade &&

            video.subject === subject &&

            video.pages.includes(page)
        );


    /* 2 - ویدیوی فصل */

    const chapterVideos =
        VIDEO_DATABASE.filter(video =>

            video.grade === grade &&

            video.subject === subject &&

            video.chapter === chapter
        );


    /* 3 - ویدیوی مرتبط همان درس */

    const subjectVideos =
        VIDEO_DATABASE.filter(video =>

            video.grade === grade &&

            video.subject === subject
        );


    let result = [];


    result.push(...exact);

    result.push(
        ...chapterVideos.filter(
            video => !result.includes(video)
        )
    );

    result.push(
        ...subjectVideos.filter(
            video => !result.includes(video)
        )
    );


    /*
       اگر هیچ ویدیوی اختصاصی وجود نداشت،
       ویدیوی آموزشی پایه هفتم ریاضی
       یا ویدیوی آموزشی موجود همان پایه
       نمایش داده می‌شود.
    */

    if (result.length === 0) {

        const fallback =
            VIDEO_DATABASE.filter(
                video =>
                    video.grade === grade
            );

        result.push(...fallback);

    }


    return result.slice(0, 8);
}


/* =========================================================
   جستجو
========================================================= */

function searchLessons() {

    const input =
        document
            .getElementById("mainSearch")
            .value
            .trim();


    if (!input) {
        return;
    }


    const query =
        normalizePersian(input);


    hideAllPages();


    document
        .getElementById("searchPage")
        .classList.remove("hidden");


    const results =
        document.getElementById(
            "searchResults"
        );


    results.innerHTML = "";


    const pageMatch =
        query.match(
            /صفحه\s*(\d+)/
        );


    const grade =
        getGradeFromText(query);


    const isMath =
        query.includes("ریاضی");


    if (
        pageMatch &&
        grade &&
        isMath
    ) {

        const page =
            Number(pageMatch[1]);


        const chapter =
            findChapterForPage(
                grade,
                "ریاضی",
                page
            );


        const exactVideos =
            findVideos(
                grade,
                "ریاضی",
                chapter,
                page
            );


        results.innerHTML += `

            <div class="searchResult">

                <h3>
                    📐 ریاضی ${getGradeName(grade)}
                    - صفحه ${numberToPersian(page)}
                </h3>

                <p>
                    فصل:
                    ${chapter}
                </p>

                <button
                    onclick="
                        openSearchLesson(
                            ${grade},
                            'ریاضی',
                            ${page}
                        )
                    "
                >
                    📚 باز کردن صفحه
                </button>

            </div>
        `;


        exactVideos.forEach(
            (video, index) => {

                results.innerHTML += `

                    <div class="searchResult">

                        <h3>
                            🎬 ${video.title}
                        </h3>

                        <p>
                            ${video.description}
                        </p>

                        <button
                            onclick="
                                window.open(
                                    '${video.url}',
                                    '_blank'
                                )
                            "
                        >
                            ▶ مشاهده ویدیو
                        </button>

                    </div>
                `;
            }
        );


        return;
    }


    /* جستجوی عمومی */

    const found =
        VIDEO_DATABASE.filter(video => {

            const text =
                normalizePersian(`
                    ${video.title}
                    ${video.description}
                    ${video.grade}
                    ${video.subject}
                    ${video.chapter}
                `);

            return text.includes(query);

        });


    if (found.length === 0) {

        results.innerHTML = `

            <div class="searchResult">

                <h3>
                    😕 نتیجه مستقیم پیدا نشد
                </h3>

                <p>
                    این مدل جستجو را امتحان کن:
                    <br><br>

                    صفحه ۳۶ ریاضی هفتم
                    <br>

                    صفحه ۸ ریاضی هفتم
                    <br>

                    توان و جذر ریاضی هفتم
                </p>

            </div>

        `;

        return;
    }


    found.forEach(video => {

        results.innerHTML += `

            <div class="searchResult">

                <h3>
                    🎬 ${video.title}
                </h3>

                <p>
                    پایه ${video.grade}
                    -
                    ${video.subject}
                </p>

                <button
                    onclick="
                        window.open(
                            '${video.url}',
                            '_blank'
                        )
                    "
                >
                    ▶ مشاهده ویدیو
                </button>

            </div>
        `;

    });

}


/* =========================================================
   باز کردن درس از جستجو
========================================================= */

function openSearchLesson(
    grade,
    subject,
    page
) {

    const chapter =
        findChapterForPage(
            grade,
            subject,
            page
        );


    openLesson(
        grade,
        subject,
        chapter,
        page
    );
}


/* =========================================================
   تعیین فصل ریاضی
========================================================= */

function findChapterForPage(
    grade,
    subject,
    page
) {

    if (
        subject === "ریاضی" &&
        grade === 7
    ) {

        if (page <= 12)
            return "راهبردهای حل مسئله";

        if (page <= 29)
            return "عددهای صحیح";

        if (page <= 45)
            return "جبر و عبارت‌های جبری";

        if (page <= 60)
            return "هندسه و استدلال";

        if (page <= 75)
            return "شمارنده‌ها و اعداد اول";

        if (page <= 90)
            return "سطح و حجم";

        if (page <= 100)
            return "توان و جذر";

        if (page <= 115)
            return "بردار و مختصات";

        return "آمار و احتمال";
    }


    if (
        subject === "ریاضی" &&
        grade === 6
    ) {

        if (page <= 23)
            return "عدد و الگوهای عددی";

        if (page <= 42)
            return "کسر";

        if (page <= 64)
            return "اعداد اعشاری";

        if (page <= 88)
            return "تقارن و مختصات";

        if (page <= 108)
            return "اندازه‌گیری";

        if (page <= 120)
            return "تناسب و درصد";
    }


    return "درس اول";
}


/* =========================================================
   برگشت
========================================================= */

function backToGrade() {

    openGrade(
        currentGrade
    );
}


function backToSubject() {

    openSubject(
        currentGrade,
        currentSubject
    );
}


function backToChapter() {

    openChapter(
        currentGrade,
        currentSubject,
        currentChapter,
        0
    );
}


/* =========================================================
   خانه
========================================================= */

function goHome() {

    hideAllPages();

    document
        .getElementById("homePage")
        .classList.remove("hidden");

}


function showAllGrades() {

    goHome();

    setTimeout(() => {

        window.scrollTo({
            top: 450,
            behavior: "smooth"
        });

    }, 100);

}


/* =========================================================
   مخفی کردن صفحات
========================================================= */

function hideAllPages() {

    document
        .querySelectorAll(".page")
        .forEach(page => {

            page.classList.add("hidden");

        });
}


/* =========================================================
   اعداد فارسی
========================================================= */

function numberToPersian(number) {

    const numbers = [
        "۰",
        "۱",
        "۲",
        "۳",
        "۴",
        "۵",
        "۶",
        "۷",
        "۸",
        "۹"
    ];


    return String(number)
        .replace(
            /\d/g,
            digit =>
                numbers[
                    Number(digit)
                ]
        );
}


/* =========================================================
   نرمال‌سازی فارسی
========================================================= */

function normalizePersian(text) {

    return String(text)

        .toLowerCase()

        .replace(/ي/g, "ی")
        .replace(/ى/g, "ی")
        .replace(/ك/g, "ک")
        .replace(/ۀ/g, "ه")
        .replace(/‌/g, " ")

        .replace(/۰/g, "0")
        .replace(/۱/g, "1")
        .replace(/۲/g, "2")
        .replace(/۳/g, "3")
        .replace(/۴/g, "4")
        .replace(/۵/g, "5")
        .replace(/۶/g, "6")
        .replace(/۷/g, "7")
        .replace(/۸/g, "8")
        .replace(/۹/g, "9")

        .replace(/\s+/g, " ")

        .trim();
}


/* =========================================================
   تشخیص پایه
========================================================= */

function getGradeFromText(text) {

    if (
        text.includes("ششم") ||
        text.includes("6")
    )
        return 6;


    if (
        text.includes("هفتم") ||
        text.includes("7")
    )
        return 7;


    if (
        text.includes("پنجم") ||
        text.includes("5")
    )
        return 5;


    if (
        text.includes("چهارم") ||
        text.includes("4")
    )
        return 4;


    if (
        text.includes("سوم") ||
        text.includes("3")
    )
        return 3;


    return null;
}


/* =========================================================
   نام پایه
========================================================= */

function getGradeName(grade) {

    const names = {

        3: "سوم",
        4: "چهارم",
        5: "پنجم",
        6: "ششم",
        7: "هفتم"

    };

    return names[grade] || grade;
}


/* =========================================================
   شروع
========================================================= */

renderGrades();

goHome();