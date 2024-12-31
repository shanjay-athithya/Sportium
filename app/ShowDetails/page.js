"use client";
import Table from "@/components/Table"
import super8 from "@/public/images/super8";
import semiFinals from "@/public/images/semiFinals";
import LeagueMatches from "@/public/images/LeagueMatches";
import Gallery from "@/components/Home/Gallery";
export default function ShowDetails() {

    const highlights = [
    {
      id: 1,
      image: "/images/sports.jpg",
      alt: "Football Match Celebration",
      caption: "Celebrating a hard-fought football victory!",
    },
    {
      id: 2,
      image: "/images/highlight2.jpg",
      alt: "Cricket Tournament",
      caption: "Our cricket team after winning the inter-college tournament.",
    },
    {
      id: 3,
      image: "/images/highlight3.jpg",
      alt: "Basketball Team",
      caption: "Basketball squad ready for the big game!",
    },
    {
      id: 4,
      image: "/images/highlight4.jpg",
      alt: "Badminton Winners",
      caption: "Winners of the annual badminton championship.",
    },
    // Add more highlights as needed
  ];



    const details = [
        {
            id: 1,
            type: "Final",
            TeamName1: "Disco Panda",
            TeamName2: "Spartan Strikers",
            TotalScore1: "29/4",
            TotalScore2: "33/1",
            Overs1: "6",
            Overs2: "3.2",
            Result: "Spartan Strikers Won By 7 Wickets",
        },
    ];
    
    const semiFinal = semiFinals.map((x) => <Table data={x} key={x.id} />);
    const elementsSuper8 = super8.map((x) => <Table data={x} key={x.id} />);
    const elements = details.map((x) => <Table data={x} key={x.id} />);
    const leagueMatches = LeagueMatches.map((x) => <Table data={x} key={x.id} />);
   return (
       <div className="min-h-screen flex flex-col">
        
      <Gallery/>
        <header className="bg-blue-600 text-white text-center py-4">
            <h1 className="text-2xl font-bold">Match Details</h1>
        </header>

        <main className="flex-grow">
            
            {/* Final Matches Section */}
            <div className="mt-10">
          
                <div className="flex flex-wrap justify-center gap-8">
                    {elements}
                </div>
            </div>

            {/* Semifinal Matches Section */}
            <div className="mt-10">
                <h2 className="text-xl font-semibold text-center mb-6">Semifinal Matches</h2>
                <div className="flex flex-wrap justify-center gap-8">
                    {semiFinal}
                </div>
            </div>

            {/* Super 8 Matches Section */}
            <div className="mt-10">
                <h2 className="text-xl font-semibold text-center mb-6">Super 8 Matches</h2>
                <div className="flex flex-wrap justify-center gap-8">
                    {elementsSuper8}
                </div>
            </div>

            {/* League Matches Section */}
            <div className="mt-10">
                <h2 className="text-xl font-semibold text-center mb-6">League Matches</h2>
                <div className="flex flex-wrap justify-center gap-8">
                    {leagueMatches}
                </div>
            </div>

        </main>

        <footer className="bg-gray-800 text-white text-center py-4">
            <p className="text-sm">© 2024 Match Management System. All rights reserved.</p>
        </footer>
    </div>
);

}