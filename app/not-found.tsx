import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-7xl px-5 sm:px-8 py-28 sm:py-40">
      <p className="num display text-7xl sm:text-9xl font-extrabold text-line">
        404
      </p>
      <h1 className="display display-section mt-6">Page not found</h1>
      <p className="mt-4 max-w-md text-lg text-slate">
        The page you&rsquo;re looking for doesn&rsquo;t exist or has moved.
      </p>
      <Link href="/" className="btn btn-primary mt-10">
        Back to home
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </Link>
    </div>
  );
}
