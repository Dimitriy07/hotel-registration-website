import Link from "next/link";
import Navigation from "./_components/Navigation";

export default function Page() {
  return (
    <div>
      <h1>MTL Hotel Registration. Welcom!</h1>
      <Link href="/cabins">Explore luxary cabins</Link>
    </div>
  );
}
