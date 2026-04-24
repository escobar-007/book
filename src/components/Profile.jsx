import { useState, useRef } from "react";

/* ── Icons ── */
const CameraIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
    <circle cx="12" cy="13" r="4" />
  </svg>
);
const EyeIcon = ({ off }) =>
  off ? (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
      <line x1="1" y1="1" x2="23" y2="23" />
    </svg>
  ) : (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
const CardIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
    <line x1="1" y1="10" x2="23" y2="10" />
  </svg>
);
const CheckIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

/* ── Field ── */
function Field({ label, hint, ...props }) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm font-medium text-gray-700">{label}</label>
      <input
        className="w-full px-4 py-3 rounded-lg text-gray-800 text-sm outline-none transition-all duration-200 border border-transparent focus:border-slate-400"
        style={{ background: "#f1f3f6" }}
        {...props}
      />
      {hint && <p className="text-xs text-gray-400">{hint}</p>}
    </div>
  );
}

/* ── Step 1: My Account ── */
function StepAccount() {
  const [avatar, setAvatar] = useState(null);
  const [form, setForm] = useState({
    firstName: "John",
    lastName: "Wick",
    phone: "+61412345678",
    email: "john.wick@reeves.com",
  });
  const fileRef = useRef();

  const onFile = (e) => {
    const f = e.target.files[0];
    if (f) setAvatar(URL.createObjectURL(f));
  };

  return (
    <div className="flex gap-10 items-start">
      {/* Avatar */}
      <div className="flex-shrink-0 relative" style={{ marginTop: "40px" }}>
        <div
          className="rounded-full overflow-hidden border-4 border-white shadow-md"
          style={{ width: 120, height: 120, background: "#ddd" }}
        >
          {avatar ? (
            <img
              src={avatar}
              alt="avatar"
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-4xl text-gray-400 font-serif">
              J
            </div>
          )}
        </div>
        <button
          onClick={() => fileRef.current.click()}
          className="absolute bottom-1 right-1 rounded-xl p-2 shadow text-white transition hover:opacity-90"
          style={{ background: "#1e293b" }}
        >
          <CameraIcon />
        </button>
        <input
          ref={fileRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={onFile}
        />
      </div>

      {/* Form */}
      <div className="flex-1">
        <h2 className="text-xl font-semibold text-gray-800 mb-6">My profile</h2>
        <div className="flex flex-col gap-4">
          <Field
            label="First Name"
            hint="Please enter your first name."
            value={form.firstName}
            onChange={(e) => setForm({ ...form, firstName: e.target.value })}
          />
          <Field
            label="Last Name"
            hint="Please enter your last name."
            value={form.lastName}
            onChange={(e) => setForm({ ...form, lastName: e.target.value })}
          />
          <div className="grid grid-cols-2 gap-4">
            <Field
              label="Phone"
              hint="Please enter your phone number."
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
            />
            <Field
              label="Email"
              hint="Please enter your email address."
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Step 2: Security ── */
function StepSecurity() {
  const [show, setShow] = useState({ cur: false, new: false, rep: false });
  const toggle = (k) => setShow((s) => ({ ...s, [k]: !s[k] }));

  const PwField = ({ label, k, hint }) => (
    <div className="flex flex-col gap-1">
      <label className="text-sm font-medium text-gray-700">{label}</label>
      <div className="relative">
        <input
          type={show[k] ? "text" : "password"}
          placeholder="••••••••"
          className="w-full px-4 py-3 pr-11 rounded-lg text-gray-800 text-sm outline-none border border-transparent focus:border-slate-400 transition-all"
          style={{ background: "#f1f3f6" }}
        />
        <button
          onClick={() => toggle(k)}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
        >
          <EyeIcon off={!show[k]} />
        </button>
      </div>
      {hint && <p className="text-xs text-gray-400">{hint}</p>}
    </div>
  );

  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-800 mb-6">
        Change Password
      </h2>
      <div className="flex flex-col gap-4 max-w-md">
        <PwField
          label="Current Password"
          k="cur"
          hint="Enter your current password."
        />
        <PwField label="New Password" k="new" hint="At least 8 characters." />
        <PwField
          label="Repeat New Password"
          k="rep"
          hint="Repeat your new password."
        />
      </div>
    </div>
  );
}

/* ── Step 3: Payment ── */
function StepPayment() {
  const [form, setForm] = useState({ card: "", name: "", exp: "", cvv: "" });

  const formatCard = (v) =>
    v
      .replace(/\D/g, "")
      .slice(0, 16)
      .replace(/(.{4})/g, "$1 ")
      .trim();
  const formatExp = (v) => {
    const d = v.replace(/\D/g, "").slice(0, 4);
    return d.length >= 3 ? d.slice(0, 2) + "/" + d.slice(2) : d;
  };

  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-800 mb-2">
        Add Payment Options
      </h2>
      <p className="text-sm text-gray-400 mb-6">
        Add a debit or credit card to your account.
      </p>

      {/* Card preview */}
      <div
        className="rounded-2xl p-5 mb-6 text-white relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg,#1e293b 0%,#334155 100%)",
          maxWidth: 340,
          height: 180,
        }}
      >
        <div className="absolute top-4 right-5 opacity-30 text-5xl">◎</div>
        <p className="text-xs opacity-60 mb-6">DEBIT CARD</p>
        <p className="tracking-widest text-lg font-mono mb-4">
          {form.card || "•••• •••• •••• ••••"}
        </p>
        <div className="flex justify-between items-end">
          <div>
            <p className="text-xs opacity-60">CARD HOLDER</p>
            <p className="text-sm font-medium">{form.name || "Your Name"}</p>
          </div>
          <div>
            <p className="text-xs opacity-60">EXPIRES</p>
            <p className="text-sm font-medium">{form.exp || "MM/YY"}</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4 max-w-md">
        <Field
          label="Card Number"
          placeholder="0000 0000 0000 0000"
          value={form.card}
          onChange={(e) =>
            setForm({ ...form, card: formatCard(e.target.value) })
          }
        />
        <Field
          label="Card Holder Name"
          placeholder="John Wick"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <div className="grid grid-cols-2 gap-4">
          <Field
            label="Expiry Date"
            placeholder="MM/YY"
            value={form.exp}
            onChange={(e) =>
              setForm({ ...form, exp: formatExp(e.target.value) })
            }
          />
          <Field
            label="CVV"
            placeholder="•••"
            maxLength={3}
            value={form.cvv}
            onChange={(e) =>
              setForm({
                ...form,
                cvv: e.target.value.replace(/\D/g, "").slice(0, 3),
              })
            }
          />
        </div>
      </div>
    </div>
  );
}

/* ── Main ── */
const STEPS = [
  { num: 1, label: "My account", sub: null },
  { num: 2, label: "Security", sub: null },
  { num: 3, label: "Make Payment", sub: "Add Payment Options" },
];

export default function ProfilePage() {
  const [step, setStep] = useState(1);
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div
      className="min-h-screen"
      style={{
        background: "#e8eaed",
        fontFamily: "'DM Sans', system-ui, sans-serif",
      }}
    >
      <style>{`@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600&display=swap');`}</style>

      <div className="max-w-4xl mx-auto pt-8 px-4">
        <p className="text-sm text-gray-500 mb-3 font-medium">Profile</p>

        {/* Steps header */}
        <div className="flex rounded-t-2xl overflow-hidden shadow-sm">
          {STEPS.map((s) => {
            const isActive = s.num === step;
            const isDone = s.num < step;
            return (
              <button
                key={s.num}
                onClick={() => setStep(s.num)}
                className="flex-1 flex items-center gap-3 px-6 py-4 transition-all duration-200"
                style={{
                  background: isActive ? "#fff" : "#f1f3f6",
                  borderBottom: isActive ? "none" : "1px solid #dde1e7",
                  cursor: "pointer",
                  border: "none",
                  textAlign: "left",
                }}
              >
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-semibold flex-shrink-0 transition-all"
                  style={{
                    background: isActive
                      ? "#1e293b"
                      : isDone
                        ? "#10b981"
                        : "#dde1e7",
                    color: isActive || isDone ? "#fff" : "#94a3b8",
                  }}
                >
                  {isDone ? <CheckIcon /> : s.num}
                </div>
                <div>
                  <p
                    className={`text-sm font-semibold ${isActive ? "text-gray-800" : "text-gray-400"}`}
                  >
                    {s.label}
                  </p>
                  {s.sub && <p className="text-xs text-gray-400">{s.sub}</p>}
                </div>
              </button>
            );
          })}
        </div>

        {/* Content */}
        <div className="bg-white rounded-b-2xl shadow-sm px-10 py-8">
          {step === 1 && <StepAccount />}
          {step === 2 && <StepSecurity />}
          {step === 3 && <StepPayment />}

          {/* Divider + Footer */}
          <div className="mt-8 pt-6 border-t border-gray-100 flex justify-between items-center">
            <div>
              {step > 1 && (
                <button
                  onClick={() => setStep((s) => s - 1)}
                  className="text-sm text-gray-400 hover:text-gray-600 transition"
                >
                  ← Back
                </button>
              )}
            </div>
            <div className="flex gap-3">
              {step < 3 && (
                <button
                  onClick={() => setStep((s) => s + 1)}
                  className="px-6 py-3 rounded-xl text-sm font-medium text-gray-600 border border-gray-200 hover:bg-gray-50 transition"
                >
                  Skip
                </button>
              )}
              <button
                onClick={step < 3 ? () => setStep((s) => s + 1) : handleSave}
                className="px-6 py-3 rounded-xl text-sm font-semibold text-white transition-all duration-200 active:scale-95"
                style={{ background: saved ? "#10b981" : "#1e293b" }}
              >
                {saved ? "✓ Saved!" : step < 3 ? "Next →" : "Save Changes"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
