import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero-students.png";
import gemaraTexture from "@/assets/gemara-texture.jpg";
import gameEscape from "@/assets/game-escape.jpg";
import gameDuel from "@/assets/game-duel.jpg";
import gameRashi from "@/assets/game-rashi.png";
import gameMishnah from "@/assets/game-mishnah.jpg";
import { Sparkles, Users, Target, Lightbulb, GraduationCap, Rocket, Phone, ArrowLeft, ScrollText } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "משחקין דתלמודא — משחקים דיגיטליים ללימוד גמרא" },
      { name: "description", content: "מיזם חינוכי חדשני המציע משחקים דיגיטליים חווייתיים ללימוד גמרא ותורה שבעל פה. יוצר המיזם: הרב אפרים שרם." },
      { property: "og:title", content: "משחקין דתלמודא" },
      { property: "og:description", content: "משחקים דיגיטליים שמרעננים את לימוד הגמרא" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Frank+Ruhl+Libre:wght@500;700;900&family=Heebo:wght@300;400;500;700&display=swap" },
    ],
  }),
  component: Index,
});

const games = [
  {
    title: "חדר בריחה — כיבוד הורים",
    desc: "משחק חווייתי המשלב פתרון חידות, הבנת סוגיה וסיכום לימודי בצורה מעוררת מעורבות.",
    points: ["ידע והבנה", "פתרון חידות", "סיכום יחידת לימוד"],
    img: gameEscape,
    link: "https://effy-hii.github.io/escapecheckgemara/",
  },
  {
    title: "דו־קרב מילות מפתח בארמית",
    desc: "משחק תחרותי בין קבוצות המסייע בזיהוי שלבי הסוגיה והבנת מילות מפתח בגמרא.",
    points: ["זיהוי קושיה ותשובה", "היכרות עם מבנה הסוגיה", "למידת מונחים בארמית"],
    img: gameDuel,
    link: "https://effy-hii.github.io/trivaiagmara/",
  },
  {
    title: "בלש רש״י",
    desc: "משחק ייחודי לפיתוח שליטה בקריאת כתב רש״י ופתיחת שער לעולם פירוש רש״י.",
    points: ["קריאת כתב רש״י", "פיתוח שטף קריאה", "חיבור ללימוד הגמרא"],
    img: gameRashi,
    link: "https://effy-hii.github.io/ktavrashi/",
  },
  {
    title: "מסדרים את המשנה",
    desc: "משחק גרירה אינטראקטיבי להיכרות עם ששת הסדרים והמסכתות.",
    points: ["בקיאות בסיסית", "היכרות עם סדרי המשנה", "הכנה ללימוד גמרא"],
    img: gameMishnah,
    link: "https://effy-hii.github.io/masechetmatch/",
  },
];

const values = [
  { icon: Target, title: "חיזוק מיומנויות יסוד", desc: "פיתוח כלים בסיסיים בקריאה, הבנה וניתוח סוגיות." },
  { icon: Sparkles, title: "חוויית הצלחה לתלמידים", desc: "מסגרת מאפשרת בה כל תלמיד חווה הצלחה ומעורבות." },
  { icon: GraduationCap, title: "כלים מוכנים להפעלה בכיתה", desc: "משחקים מוכנים לשימוש מיידי ללא צורך בהכנה מורכבת." },
  { icon: Rocket, title: "פוטנציאל להתרחבות עתידית", desc: "ספרייה מתפתחת המתרחבת ומתעשרת בהתמדה." },
];

const reasons = [
  { icon: ScrollText, title: "מורכבות הלימוד", desc: "הגמרא מציבה אתגר ייחודי בשפה, במבנה ובהיגיון של הסוגיה — ודורשת דרכי הוראה שמתאימות לכך." },
  { icon: Users, title: "מעורבות פעילה", desc: "למידה חווייתית מייצרת חיבור עמוק יותר לחומר ומחזקת את שותפות התלמיד בלימוד." },
  { icon: Lightbulb, title: "סקרנות וביטחון", desc: "המשחקים מטפחים סקרנות בריאה ובונים ביטחון בלימוד עצמאי של סוגיה." },
  { icon: GraduationCap, title: "למידה משמעותית", desc: "הפיכת הלימוד לחוויה זכירה ומעצבת — כזו שמשפיעה על התלמיד הרבה אחרי השיעור." },
];

function Index() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden" dir="rtl">
      {/* HERO */}
      <header className="relative bg-gradient-hero text-cream overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.07] mix-blend-screen"
          style={{ backgroundImage: `url(${gemaraTexture})`, backgroundSize: "cover" }}
          aria-hidden
        />
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-gradient-glow animate-glow-pulse" aria-hidden />
        <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] bg-gradient-glow animate-glow-pulse" style={{ animationDelay: "2s" }} aria-hidden />

        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 py-16 md:py-24 lg:py-32 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1 animate-fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-gold/30 text-sm text-gold-soft mb-6">
              <Sparkles className="w-4 h-4" />
              <span>מיזם חינוכי חדשני</span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-5">
              <span className="text-gradient-gold">משחקין דתלמודא</span>
            </h1>
            <p className="text-xl sm:text-2xl text-cream/90 font-light mb-6 leading-relaxed">
              משחקים דיגיטליים שמרעננים את לימוד הגמרא
            </p>
            <p className="text-base sm:text-lg text-cream/75 leading-loose mb-8 max-w-xl">
              תלמידים רבים זקוקים לדרך חיה, סקרנית ומפעילה כדי להיכנס לעולם הגמרא.
              המיזם <span className="text-gold-soft font-medium">'משחקין דתלמודא'</span> מציע משחקים דיגיטליים חווייתיים שמסייעים להפוך את הלמידה לפעילה, משמעותית ומעוררת מעורבות.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a href="#games" className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-gradient-gold text-navy-deep font-bold text-lg shadow-gold transition-smooth hover:scale-[1.03] hover:shadow-elegant">
                לצפייה במשחקים
                <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
              </a>
              <a href="#contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl border-2 border-gold/50 text-cream font-semibold text-lg backdrop-blur-sm transition-smooth hover:bg-gold/10 hover:border-gold">
                ליצירת קשר
              </a>
            </div>

            <div className="pt-6 border-t border-white/10">
              <p className="text-gold-soft font-semibold text-lg">יוצר המיזם: הרב אפרים שרם</p>
              <p className="text-cream/70 text-sm mt-1">מדריך מחוזי בתושב״ע ויוצר בבינה מלאכותית</p>
              <a href="tel:0536228498" className="inline-flex items-center gap-2 mt-3 text-cream/90 hover:text-gold transition-smooth">
                <Phone className="w-4 h-4" />
                <span dir="ltr">053-622-8498</span>
              </a>
            </div>
          </div>

          <div className="order-1 lg:order-2 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-gold opacity-30 rounded-3xl blur-2xl animate-glow-pulse" aria-hidden />
              <div className="relative rounded-3xl overflow-hidden shadow-elegant border border-gold/20">
                <img src={heroImg} alt="אווירת בית מדרש" width={1280} height={1280} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/60 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* WHY GAMIFICATION */}
      <section className="relative py-20 md:py-28 px-5 sm:px-8">
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{ backgroundImage: `url(${gemaraTexture})`, backgroundSize: "600px" }}
          aria-hidden
        />
        <div className="relative max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-gold font-semibold text-sm tracking-widest uppercase">פדגוגיה</span>
            <h2 className="text-4xl sm:text-5xl font-bold mt-3 mb-5 text-navy-deep">
              למה דווקא משחקים בלימוד גמרא?
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-loose">
              לימוד הגמרא הוא מסע אינטלקטואלי עמוק. כדי שכל תלמיד יוכל להיכנס לעולם זה בשמחה ובביטחון,
              נדרש שילוב של מסורת ישנה עם כלים פדגוגיים חדשים שמדברים בשפת הדור.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {reasons.map((r, i) => (
              <div key={i} className="group relative bg-card rounded-3xl p-7 shadow-soft border border-border/50 transition-smooth hover:-translate-y-1 hover:shadow-elegant">
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-glow opacity-0 group-hover:opacity-100 transition-smooth rounded-3xl" aria-hidden />
                <div className="relative">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-gold text-navy-deep mb-4 shadow-soft">
                    <r.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-navy-deep mb-2">{r.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{r.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GAMES */}
      <section id="games" className="relative py-20 md:py-28 px-5 sm:px-8 bg-gradient-cream">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-gold font-semibold text-sm tracking-widest uppercase">המשחקים</span>
            <h2 className="text-4xl sm:text-5xl font-bold mt-3 mb-5 text-navy-deep">
              ספריית המשחקים
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              ארבעה משחקים דיגיטליים חווייתיים, כל אחד מכוון למיומנות לימודית ייחודית.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {games.map((g, i) => (
              <article key={i} className="group relative bg-card rounded-3xl overflow-hidden shadow-soft border-2 border-transparent transition-smooth hover:shadow-elegant hover:border-gold/40 hover:-translate-y-1">
                <div className="relative h-56 sm:h-64 overflow-hidden bg-navy-deep">
                  <img src={g.img} alt={g.title} loading="lazy" className="w-full h-full object-cover transition-smooth group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/90 via-navy-deep/30 to-transparent" />
                  <div className="absolute bottom-4 right-5 left-5">
                    <h3 className="text-2xl sm:text-3xl font-bold text-cream drop-shadow-lg">{g.title}</h3>
                  </div>
                </div>
                <div className="p-6 sm:p-8">
                  <p className="text-foreground/80 leading-relaxed mb-5">{g.desc}</p>
                  <div className="space-y-2 mb-6">
                    <p className="text-xs font-bold text-gold tracking-wider uppercase mb-2">תרומה פדגוגית</p>
                    {g.points.map((p, j) => (
                      <div key={j} className="flex items-center gap-2 text-sm text-foreground/75">
                        <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                        <span>{p}</span>
                      </div>
                    ))}
                  </div>
                  <a
                    href={g.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn inline-flex items-center justify-center gap-2 w-full px-6 py-3.5 rounded-2xl bg-navy text-cream font-bold transition-smooth hover:bg-navy-deep hover:shadow-gold"
                  >
                    למשחק
                    <ArrowLeft className="w-4 h-4 transition-transform group-hover/btn:-translate-x-1" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FUTURE VISION */}
      <section className="relative py-20 md:py-28 px-5 sm:px-8 bg-gradient-hero text-cream overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: `url(${gemaraTexture})`, backgroundSize: "cover" }} aria-hidden />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-glow animate-glow-pulse" aria-hidden />
        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-gold text-navy-deep mb-6 shadow-gold animate-float">
            <Rocket className="w-8 h-8" />
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-gradient-gold">וזו רק ההתחלה</span>
          </h2>
          <p className="text-lg sm:text-xl text-cream/85 leading-loose max-w-3xl mx-auto">
            ארבעת המשחקים הללו הם תחילתו של מיזם רחב ומתפתח, שמטרתו לבנות
            <span className="text-gold-soft font-semibold"> ספרייה דיגיטלית חיה, מגוונת ומעוררת השראה </span>
            ללימוד תורה שבעל פה.
          </p>
        </div>
      </section>

      {/* VALUE */}
      <section className="py-20 md:py-28 px-5 sm:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-gold font-semibold text-sm tracking-widest uppercase">למערכת החינוך</span>
            <h2 className="text-4xl sm:text-5xl font-bold mt-3 mb-5 text-navy-deep">
              מה המיזם מציע למערכת החינוך?
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {values.map((v, i) => (
              <div key={i} className="group flex gap-5 bg-card rounded-3xl p-7 shadow-soft border border-border/50 transition-smooth hover:shadow-elegant hover:-translate-y-1">
                <div className="shrink-0">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-gold text-navy-deep shadow-soft transition-smooth group-hover:scale-110">
                    <v.icon className="w-7 h-7" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-navy-deep mb-2">{v.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section id="contact" className="relative py-20 md:py-28 px-5 sm:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-cream" aria-hidden />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-gradient-glow opacity-60" aria-hidden />
        <div className="relative max-w-3xl mx-auto text-center">
          <div className="bg-card rounded-[2.5rem] p-10 sm:p-14 shadow-elegant border border-gold/20 relative overflow-hidden">
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-gold opacity-20 rounded-full blur-3xl" aria-hidden />
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-gradient-gold opacity-20 rounded-full blur-3xl" aria-hidden />
            <div className="relative">
              <h2 className="text-4xl sm:text-5xl font-bold text-navy-deep mb-5">
                רוצים להכיר את המיזם מקרוב?
              </h2>
              <p className="text-lg text-muted-foreground leading-loose mb-8 max-w-2xl mx-auto">
                המיזם <span className="text-navy font-semibold">'משחקין דתלמודא'</span> פותח אפשרויות חדשות ללימוד תורה שבעל פה בצורה מעוררת השראה, חווייתית ומשמעותית.
              </p>
              <a
                href="tel:0536228498"
                className="group inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-4 sm:py-5 rounded-2xl bg-gradient-gold text-navy-deep font-bold text-lg shadow-gold transition-smooth hover:scale-[1.03] hover:shadow-elegant"
              >
                <Phone className="w-5 h-5" />
                לתיאום שיחה עם הרב אפרים שרם
              </a>
              <p className="mt-6 text-2xl sm:text-3xl font-bold text-navy" dir="ltr">053-622-8498</p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative bg-navy-deep text-cream/80 py-12 px-5 sm:px-8 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: `url(${gemaraTexture})`, backgroundSize: "cover" }} aria-hidden />
        <div className="relative max-w-6xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-gradient-gold mb-2">משחקין דתלמודא</h3>
          <p className="text-sm text-cream/60 mb-4">משחקים דיגיטליים ללימוד גמרא ותורה שבעל פה</p>
          <div className="flex items-center justify-center gap-2 text-cream/80">
            <Phone className="w-4 h-4" />
            <a href="tel:0536228498" className="hover:text-gold transition-smooth" dir="ltr">053-622-8498</a>
          </div>
          <div className="mt-6 pt-6 border-t border-white/10 text-xs text-cream/50">
            © {new Date().getFullYear()} הרב אפרים שרם · כל הזכויות שמורות
          </div>
        </div>
      </footer>
    </div>
  );
}
