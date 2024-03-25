import Feed from "@/components/Feed";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center justify-start p-5">
      <div className="w-full flex items-center justify-center">
        <h1 className="head_text font-satoshi">Welcome to the <span className="orange_gradient">Book Store.</span></h1>
      </div>
      <p className="desc text-center">Dive into a world of stories, your one-stop shop for new releases, hidden gems, and all your favorite reads. Browse our extensive collection by genre, author, or recommendation, or lose yourself in the curated staff picks. Enjoy secure checkout, fast delivery, and competitive prices, all from the comfort of your own armchair.</p>
      <Feed />
    </main>
  );
}
