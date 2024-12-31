import React from "react";


// Table Component
export default function Table(props) {
    return (
        <div className="flex justify-center mt-10">
            <table className="w-1/2 border border-gray-300 rounded-lg shadow-lg">
                <caption className="text-lg font-bold mb-2">{props.data.type}</caption>
                <thead>
                    <tr className="bg-gray-200">
                        <th className="border border-gray-300 px-4 py-2">Team Name</th>
                        <th className="border border-gray-300 px-4 py-2">Total Score</th>
                        <th className="border border-gray-300 px-4 py-2">Overs</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="bg-white">
                        <td className="border border-gray-300 px-4 py-2 text-center">{props.data.TeamName1}</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">{props.data.TotalScore1}</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">{props.data.Overs1} overs</td>
                    </tr>
                    <tr className="bg-gray-50">
                        <td className="border border-gray-300 px-4 py-2 text-center">{props.data.TeamName2}</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">{props.data.TotalScore2}</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">{props.data.Overs2} overs</td>
                    </tr>
                    <tr className="bg-yellow-300 font-bold">
                        <td colSpan="3" className="border border-gray-300 px-4 py-2 text-center">{props.data.Result}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}