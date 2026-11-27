import Link from "next/link";
import PageLayout from "@/components/PageLayout/PageLayout";
import Btn from "@/components/utils/Btn";

export default function NotFound() {
  return (
    <PageLayout>
      <section className="flex min-h-[60vh] flex-col items-start justify-center py-20">
        <p className="section-kicker">404</p>
        <h1 className="section-title">Page not found.</h1>
        <p className="section-copy mt-4">
          The page you requested is not available. Head back to work or home.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/">
            <Btn>Go home</Btn>
          </Link>
          <Link href="/projects">
            <Btn variant="outline">View projects</Btn>
          </Link>
        </div>
      </section>
    </PageLayout>
  );
}
