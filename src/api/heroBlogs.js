// images
import blogImg1 from "../images/hero/img-1.jpg";
import blogImg2 from "../images/hero/img-2.jpg";
import blogImg3 from "../images/hero/img-3.jpg";
import blogImg4 from "../images/hero/img-4.jpg";
import blogImg5 from "../images/slider/slide-1.jpg";
import blogImg6 from "../images/slider/slide-2.jpg";

import blogSingleImg1 from "../images/slider/hero-single/img-1.jpg";
import blogSingleImg2 from "../images/slider/hero-single/img-2.jpg";
import blogSingleImg3 from "../images/slider/hero-single/img-3.jpg";
import blogSingleImg4 from "../images/slider/hero-single/img-4.jpg";

import avater1 from "../images/blog/blog-avater/img-1.jpg";
import avater2 from "../images/blog/blog-avater/img-2.jpg";
import avater3 from "../images/blog/blog-avater/img-3.jpg";

const heroBlogs = [
    {
        id: '1',
        title: '50% அமெரிக்க வரி: தமிழ்நாட்டில் 5 துறைகள் பாதிப்பு',
        slug:"us-tax-tamilnadu",
        screens: blogImg1,
        avater:avater1,
        thumb:'பொருளாதாரம்',
        description: 'அமெரிக்கா விதிக்கும் 50% வரி புதன்கிழமை முதல் அமலுக்கு வரும் நிலையில், தமிழ்நாட்டின் ஐந்து துறைகள் அதிகளவில் பாதிக்கப்படும் என்று நிபுணர்கள் எச்சரிக்கை விடுத்துள்ளனர்.',
        author: 'விதைகள் இயக்கம்',
        authorTitle:'செய்தியாளர்',
        create_at: '26 ஆகஸ்ட், 2025',
        blogSingleImg:blogSingleImg1, 
        comment:'120',
        blClass:'format-standard-image',
    },
    {
        id: '2',
        title: 'விஜய் - விஜயகாந்த் பெயர் அரசியலில் விவாதம்',
        slug:"vijay-vijayakanth-politics",
        screens: blogImg2,
        avater:avater2,
        thumb:'அரசியல்',
        description: 'விஜய், விஜயகாந்தின் பெயரை அரசியல் களத்தில் பயன்படுத்துகிறார் என்ற குற்றச்சாட்டைத் தொடர்ந்து, தேமுதிக வட்டாரங்களில் அதிருப்தி அதிகரித்துள்ளது.',
        author: 'விதைகள் இயக்கம்',
        authorTitle:'அரசியல் ஆய்வாளர்',
        create_at: '26 ஆகஸ்ட், 2025',
        blogSingleImg:blogSingleImg2, 
        comment:'85',
        blClass:'format-standard-image',
    },
    {
        id: '3',
        title: 'சவுதி விமான விபத்தில் 301 பேர் பலி',
        slug:"saudi-plane-crash",
        screens: blogImg3,
        avater:avater3,
        thumb:'உலகம்',
        description: 'சவுதி ஏர்லைன்ஸ் விமான விபத்தில் 301 பேர் உயிரிழந்ததற்கான முக்கிய காரணம் பணியாளர்கள் எடுத்த தாமதமான முடிவாகும் என விசாரணையில் தெரியவந்துள்ளது.',
        author: 'விதைகள் இயக்கம்',
        authorTitle:'சர்வதேச நிருபர்',
        create_at: '26 ஆகஸ்ட், 2025',
        blogSingleImg:blogSingleImg3,
        comment:'60',
        blClass:'format-video',
    },
    {
        id: '4',
        title: 'ஜிஎஸ்டி மாற்றம்: தமிழகத்திற்கு ரூ.6,000 கோடி இழப்பு',
        slug:"gst-change-loss",
        screens: blogImg4,
        avater:avater1,
        thumb:'பொருளாதாரம்',
        description: 'புதிய ஜிஎஸ்டி விதிகள் அமல்படுத்தப்பட்டால், தமிழகத்திற்கு ரூ.6,000 கோடி வரை நிதி இழப்பு ஏற்படக்கூடும் என நிபுணர்கள் கூறுகின்றனர்.',
        author: 'விதைகள் இயக்கம்',
        authorTitle:'பொருளாதார விமர்சகர்',
        create_at: '26 ஆகஸ்ட், 2025',
        blogSingleImg:blogSingleImg4,
        comment:'42',
        blClass:'format-video',
    },
    {
        id: '5',
        title: 'கோவையில் க்யூஆர் கோட் மோசடி: மாணவர் பெற்றோர் ஏமாற்றம்',
        slug:"coimbatore-school-scam",
        screens: blogImg5,
        avater:avater1,
        thumb:'இந்தியா',
        description: 'ஒரே பள்ளியில் படித்த மாணவர்களின் பெற்றோரை குறிவைத்து, க்யூஆர் கோட் மூலம் பல லட்சம் ரூபாய் மோசடி செய்த கும்பலை போலீசார் கைது செய்துள்ளனர்.',
        author: 'விதைகள் இயக்கம்',
        authorTitle:'நிருபர்',
        create_at: '26 ஆகஸ்ட், 2025',
        blogSingleImg:blogImg5,
        comment:'55',
        blClass:'format-video',
    },
    {
        id: '6',
        title: 'இலங்கை நீதிமன்றம் ராமேஸ்வரம் மீனவர்கள் 7 பேரை விடுதலை',
        slug:"ramaswaram-fishermen-release",
        screens: blogImg6,
        avater:avater1,
        thumb:'இலங்கை',
        description: 'இலங்கையில் கைது செய்யப்பட்ட ராமேஸ்வரம் மீனவர்கள் 7 பேரை, நீண்ட விசாரணைக்கு பிறகு இலங்கை நீதிமன்றம் விடுதலை செய்துள்ளது.',
        author: 'விதைகள் இயக்கம்',
        authorTitle:'சிறப்பு நிருபர்',
        create_at: '26 ஆகஸ்ட், 2025',
        blogSingleImg:blogImg6,
        comment:'77',
        blClass:'format-video',
    },
];


export default heroBlogs;
