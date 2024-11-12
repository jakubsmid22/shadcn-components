import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";

const TableComponent = () => {
  const teams = [
    {
      name: "Arsenal",
      score: "91:29",
      points: 89,
    },
    {
      name: "Aston Villa",
      score: "76:61",
      points: 68,
    },
    {
      name: "Bournemouth",
      score: "54:67",
      points: 48,
    },
    {
      name: "Brentford",
      score: "56:65",
      points: 39,
    },
    {
      name: "Brighton",
      score: "55:62",
      points: 48,
    },
    {
      name: "Burnley",
      score: "41:78",
      points: 24,
    },
    {
      name: "Crystal Palace",
      score: "57:58",
      points: 49,
    },
    {
      name: "Everton",
      score: "40:51",
      points: 40,
    },
    {
      name: "Fulham",
      score: "55:61",
      points: 47,
    },
    {
      name: "Chelsea",
      score: "77:63",
      points: 63,
    },
    {
      name: "Liverpool",
      score: "86:41",
      points: 82,
    },
    {
      name: "Luton",
      score: "52:85",
      points: 26,
    },
    {
      name: "Manchester City",
      score: "96:34",
      points: 91,
    },
    {
      name: "Manchester Utd",
      score: "57:58",
      points: 60,
    },
    {
      name: "Newcastle",
      score: "85:62",
      points: 60,
    },
    {
      name: "Nottingham",
      score: "49:67",
      points: 32,
    },
    {
      name: "Sheffield Utd",
      score: "35:104",
      points: 16,
    },
    {
      name: "Tottenham",
      score: "74:61",
      points: 66,
    },
    {
      name: "West Ham",
      score: "60:74",
      points: 52,
    },
    {
      name: "Wolves",
      score: "50:65",
      points: 46,
    },
  ];

  return (
    <div className="flex flex-col gap-2">
      <a
        target="_blank"
        href="https://ui.shadcn.com/docs/components/table"
        className="font-bold underline cursor-pointer"
      >
        Table
      </a>
      <Table>
        <TableCaption>Premier League 2023/2024</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>#</TableHead>
            <TableHead>Team</TableHead>
            <TableHead>Score</TableHead>
            <TableHead>Points</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
            {
                teams.sort((a, b) => b.points - a.points).map((team, i) => {
                    const {name, score, points} = team
                    return <TableRow key={i}>
                        <TableCell>{i + 1}</TableCell>
                        <TableCell>{name}</TableCell>
                        <TableCell>{score}</TableCell>
                        <TableCell>{points}</TableCell>
                    </TableRow>
                })
            }
        </TableBody>
      </Table>
    </div>
  );
};

export default TableComponent;
