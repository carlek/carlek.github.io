import { useState } from "react";

const questions = [
  {
    id: 1,
    category: "Engagement",
    question: "How did the interviewers respond when you spoke?",
    options: [
      { text: "Leaned in, asked follow-up questions, built on my answers", score: 4 },
      { text: "Listened attentively, nodded, seemed interested", score: 3 },
      { text: "Polite but neutral — hard to read", score: 2 },
      { text: "Seemed distracted or moved on quickly", score: 1 },
    ],
  },
  {
    id: 2,
    category: "Chemistry",
    question: "How did the conversation feel overall?",
    options: [
      { text: "Like a peer discussion — collaborative and energetic", score: 4 },
      { text: "Professional and warm — comfortable", score: 3 },
      { text: "Formal and structured — strictly Q&A", score: 2 },
      { text: "Tense or one-sided", score: 1 },
    ],
  },
  {
    id: 3,
    category: "Future Signals",
    question: "Did they talk about next steps or the role in future tense?",
    options: [
      { text: "Yes — described what I'd be doing, mentioned team members I'd meet", score: 4 },
      { text: "Mentioned next steps in the process clearly", score: 3 },
      { text: "Vague about timeline or next steps", score: 2 },
      { text: "No mention of next steps at all", score: 1 },
    ],
  },
  {
    id: 4,
    category: "Your Answers",
    question: "How did your key answers land?",
    options: [
      { text: "They reacted visibly — quoted back something I said or agreed strongly", score: 4 },
      { text: "Positive reactions, no pushback on my main points", score: 3 },
      { text: "Mixed — some good moments, some flat ones", score: 2 },
      { text: "I fumbled at least one important question", score: 1 },
    ],
  },
  {
    id: 5,
    category: "Their Questions",
    question: "How did their questions evolve through the interview?",
    options: [
      { text: "Got deeper and more specific — they were probing seriously", score: 4 },
      { text: "Covered the expected ground thoroughly", score: 3 },
      { text: "Felt like they were checking boxes", score: 2 },
      { text: "Surface level — didn't dig much", score: 1 },
    ],
  },
  {
    id: 6,
    category: "Your Questions",
    question: "How did they respond to your questions?",
    options: [
      { text: "Engaged deeply — my questions sparked real discussion", score: 4 },
      { text: "Answered fully and seemed to appreciate them", score: 3 },
      { text: "Answered briefly and moved on", score: 2 },
      { text: "Deflected or gave non-answers", score: 1 },
    ],
  },
  {
    id: 7,
    category: "Fit Signals",
    question: "Did they indicate you were a strong fit?",
    options: [
      { text: "Explicitly — said something like 'your background is exactly what we need'", score: 4 },
      { text: "Implicitly — connected my experience to specific needs", score: 3 },
      { text: "Neither confirmed nor denied fit", score: 2 },
      { text: "Raised a concern or gap", score: 1 },
    ],
  },
  {
    id: 8,
    category: "Energy",
    question: "How did you feel when it ended?",
    options: [
      { text: "Energized — I want this more than when I walked in", score: 4 },
      { text: "Good — I represented myself well", score: 3 },
      { text: "Uncertain — hard to tell how it went", score: 2 },
      { text: "Deflated — something didn't click", score: 1 },
    ],
  },
];

const getResult = (score) => {
  const max = questions.length * 4;
  const pct = (score / max) * 100;
  if (pct >= 85) return {
    label: "Strong offer signal",
    color: "#22c55e",
    commentary: "Nearly every indicator is positive. They were engaged, signaled fit, and talked future tense. You likely made a strong impression. Stay calm and wait — don't over-follow-up.",
  };
  if (pct >= 65) return {
    label: "Solid — likely in contention",
    color: "#84cc16",
    commentary: "More positives than negatives. There may be one or two moments that weren't perfect, but nothing that should disqualify you. A brief thank-you note reinforcing your key points is worth sending.",
  };
  if (pct >= 45) return {
    label: "Mixed — outcome uncertain",
    color: "#f59e0b",
    commentary: "Some good moments but some flat ones. You're probably in the pool but not clearly the frontrunner. A strong follow-up note that addresses any gaps you sensed could help.",
  };
  return {
    label: "Challenging — recalibrate",
    color: "#ef4444",
    commentary: "Several signals were weak. That doesn't mean it's over, but it's worth honestly reviewing what didn't land and preparing for a possible rejection — or a chance to address concerns if they follow up.",
  };
};

export default function InterviewQuiz() {
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleSelect = (qId, score) => {
    if (submitted) return;
    setAnswers((prev) => ({ ...prev, [qId]: score }));
  };

  const totalScore = Object.values(answers).reduce((a, b) => a + b, 0);
  const allAnswered = Object.keys(answers).length === questions.length;
  const result = submitted ? getResult(totalScore) : null;
  const maxScore = questions.length * 4;

  return (
    <div style={{
      fontFamily: "'Inter', sans-serif",
      background: "#0f172a",
      minHeight: "100vh",
      padding: "2rem 1rem",
      color: "#e2e8f0",
    }}>
      <div style={{ maxWidth: 680, margin: "0 auto" }}>

        {/* Header */}
        <div style={{ marginBottom: "2rem" }}>
          <div style={{
            fontSize: "0.75rem",
            letterSpacing: "0.15em",
            color: "#64748b",
            textTransform: "uppercase",
            marginBottom: "0.5rem",
          }}>
            Post-Interview Diagnostic
          </div>
          <h1 style={{
            fontSize: "1.5rem",
            fontWeight: 700,
            color: "#f8fafc",
            margin: 0,
          }}>
            How did it go?
          </h1>
          <p style={{ color: "#94a3b8", marginTop: "0.5rem", fontSize: "0.9rem" }}>
            {submitted
              ? "Here's how your interview stacked up. Use this to decide your next move."
              : "Answer questions to get an idea on how it went. Don't worry, nothing here is recorded, tracked, or shared!"}
          </p>
        </div>

        {/* Questions */}
        {!submitted && questions.map((q, idx) => (
          <div key={q.id} style={{
            background: "#1e293b",
            borderRadius: "0.75rem",
            padding: "1.25rem",
            marginBottom: "1rem",
            border: answers[q.id] ? "1px solid #334155" : "1px solid #1e293b",
          }}>
            <div style={{
              fontSize: "0.7rem",
              color: "#475569",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              marginBottom: "0.4rem",
            }}>
              {q.category}
            </div>
            <div style={{
              fontSize: "0.95rem",
              fontWeight: 600,
              color: "#f1f5f9",
              marginBottom: "0.9rem",
            }}>
              {idx + 1}. {q.question}
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              {q.options.map((opt) => {
                const selected = answers[q.id] === opt.score;
                return (
                  <button
                    key={opt.score}
                    onClick={() => handleSelect(q.id, opt.score)}
                    style={{
                      textAlign: "left",
                      padding: "0.65rem 0.9rem",
                      borderRadius: "0.5rem",
                      border: selected ? "1px solid #6366f1" : "1px solid #334155",
                      background: selected ? "#312e81" : "#0f172a",
                      color: selected ? "#a5b4fc" : "#94a3b8",
                      fontSize: "0.85rem",
                      cursor: "pointer",
                      transition: "all 0.15s",
                    }}
                  >
                    {opt.text}
                  </button>
                );
              })}
            </div>
          </div>
        ))}

        {/* Submit */}
        {!submitted && (
          <button
            onClick={() => allAnswered && setSubmitted(true)}
            style={{
              width: "100%",
              padding: "0.85rem",
              borderRadius: "0.5rem",
              background: allAnswered ? "#6366f1" : "#1e293b",
              color: allAnswered ? "#fff" : "#475569",
              border: "none",
              fontSize: "0.95rem",
              fontWeight: 600,
              cursor: allAnswered ? "pointer" : "not-allowed",
              marginTop: "0.5rem",
            }}
          >
            {allAnswered ? "See Result" : `Answer all questions (${Object.keys(answers).length}/${questions.length})`}
          </button>
        )}

        {/* Result */}
        {submitted && result && (
          <div>
            <div style={{
              background: "#1e293b",
              borderRadius: "0.75rem",
              padding: "1.5rem",
              marginBottom: "1.5rem",
              borderLeft: `4px solid ${result.color}`,
            }}>
              <div style={{
                fontSize: "0.75rem",
                color: "#64748b",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                marginBottom: "0.4rem",
              }}>
                Assessment
              </div>
              <div style={{
                fontSize: "1.4rem",
                fontWeight: 700,
                color: result.color,
                marginBottom: "0.75rem",
              }}>
                {result.label}
              </div>
              <div style={{
                fontSize: "0.9rem",
                color: "#94a3b8",
                lineHeight: 1.6,
              }}>
                {result.commentary}
              </div>
            </div>

            {/* Score breakdown */}
            <div style={{
              background: "#1e293b",
              borderRadius: "0.75rem",
              padding: "1.25rem",
              marginBottom: "1rem",
            }}>
              <div style={{
                fontSize: "0.75rem",
                color: "#64748b",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                marginBottom: "1rem",
              }}>
                Score by Category
              </div>
              {questions.map((q) => {
                const s = answers[q.id] || 0;
                const pct = (s / 4) * 100;
                const barColor = pct >= 75 ? "#22c55e" : pct >= 50 ? "#f59e0b" : "#ef4444";
                return (
                  <div key={q.id} style={{ marginBottom: "0.75rem" }}>
                    <div style={{
                      display: "flex",
                      justifyContent: "space-between",
                      fontSize: "0.8rem",
                      color: "#94a3b8",
                      marginBottom: "0.25rem",
                    }}>
                      <span>{q.category}</span>
                      <span style={{ color: barColor }}>{s}/4</span>
                    </div>
                    <div style={{
                      background: "#0f172a",
                      borderRadius: "999px",
                      height: "6px",
                      overflow: "hidden",
                    }}>
                      <div style={{
                        width: `${pct}%`,
                        height: "100%",
                        background: barColor,
                        borderRadius: "999px",
                        transition: "width 0.4s ease",
                      }} />
                    </div>
                  </div>
                );
              })}
              <div style={{
                marginTop: "1rem",
                paddingTop: "1rem",
                borderTop: "1px solid #334155",
                display: "flex",
                justifyContent: "space-between",
                fontSize: "0.85rem",
                color: "#64748b",
              }}>
                <span>Total score</span>
                <span style={{ color: result.color, fontWeight: 600 }}>
                  {totalScore} / {maxScore}
                </span>
              </div>
            </div>

            <button
              onClick={() => { setAnswers({}); setSubmitted(false); }}
              style={{
                width: "100%",
                padding: "0.75rem",
                borderRadius: "0.5rem",
                background: "transparent",
                color: "#475569",
                border: "1px solid #334155",
                fontSize: "0.85rem",
                cursor: "pointer",
              }}
            >
              Retake
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
