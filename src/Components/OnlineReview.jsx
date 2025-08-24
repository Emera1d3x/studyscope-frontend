import "./OnlineReview.css";

const reviews = [
  {
    name: "Daniel Chen",
    date: "2025-08-10",
    text: "No words but A.M.A.Z.I.N.G.!!! I sent my 12 year old here because she was struggling with math. Danny was super courteous and professional. He hooked us up with Pesandu, who was clearly VERY well prepared, and by the second lesson, I started noticing clear improvements. After about two months, my daughter not only began getting A's, but would even start learning math on her own time. Pesandu and StudyScope didn't just make her better at math. They changed her relationship with math at the core.",
  },
  {
    name: "Ronnen Nagarajah",
    date: "2025-07-20",
    text: "Did an amazing job. My son got all 90s on his report card. Very proud of him.",
  },
  {
    name: "Mahyar",
    date: "2025-07-20",
    text: "Owner is a very great guy. Great people, helped my brother go from failing to acing all his classes.",
  },
  {
    name: "Natasha Balkos",
    date: "2025-07-20",
    text: "All the workers are incredibly hard working and have an immense amount of dedication for the kids who are part of this program! You will not be disappointed.",
  },
  {
    name: "Tristan FunnyLol",
    date: "2025-07-20",
    text: "Both my brother and I have seen huge progress. Great team.",
  },
  {
    name: "Ariyah Powell",
    date: "2025-07-20",
    text: "My sister and I have made a lot of progress with their programs. Amazing people.",
  },
  {
    name: "Anthony",
    date: "2025-07-20",
    text: "Very happy with my sister’s results and progress.",
  },
  {
    name: "ariel forsythe",
    date: "2025-07-20",
    text: "Excellent communication with us and reasonable prices.",
  },
  {
    name: "Ansley Stfleur",
    date: "2025-07-20",
    text: "Very helpful and supportive.",
  },
];


function OnlineReviews() {
  return (
    <div className="reviews-box">
      <div className="reviews-header-bar">
        <h2>Online Reviews</h2>
        <div className="reviews-rating">
          ⭐⭐⭐⭐⭐ <span className="review-count">Displaying 9 Reviews</span>
        </div>
      </div>

      <div className="reviews-scroll">
        {reviews.map((r, i) => (
          <div className="review-item" key={i}>
            <div className="review-meta">
              <img
                src="https://www.gstatic.com/images/branding/product/1x/gsa_512dp.png"
                alt="Google logo"
                className="google-logo"
              />
              <div className="review-date">{r.date}</div>
            </div>
            <div className="reviewer">{r.name}</div>
            <div className="stars">⭐⭐⭐⭐⭐</div>
            <p className="review-text">{r.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OnlineReviews;
