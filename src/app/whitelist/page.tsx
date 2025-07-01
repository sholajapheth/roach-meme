"use client";
import { useState } from "react";

const SHEET_CSV_URL = "https://docs.google.com/spreadsheets/d/1AXX4L2Mdt3UzvJicbiJ1pR6N9eVnaAP8zcplXHU6roQ/pub?output=csv";

function validateSuiWallet(address: string) {
  // Basic SUI address validation: 0x followed by 40-64 hex chars
  return /^0x[a-fA-F0-9]{40,64}$/.test(address.trim());
}

export default function WhitelistPage() {
  const [wallet, setWallet] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleCheck = async (e: React.FormEvent) => {
    e.preventDefault();
    setResult(null);
    setError(null);
    if (!validateSuiWallet(wallet)) {
      setError("Please enter a valid SUI wallet address (0x...)");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch(SHEET_CSV_URL);
      if (!res.ok) throw new Error("Failed to fetch whitelist");
      const text = await res.text();
      // Parse CSV: flatten all cells, trim, and check for wallet
      const allWallets = text
        .split(/\r?\n/)
        .flatMap((row) => row.split(","))
        .map((cell) => cell.trim().toLowerCase())
        .filter(Boolean);
      if (allWallets.includes(wallet.trim().toLowerCase())) {
        setResult("Congratulations! Your wallet is whitelisted.");
      } else {
        setResult("Sorry, this wallet is not whitelisted.");
      }
    } catch {
      setError("Error checking whitelist. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#1a1005] px-4">
      <div className="bg-black bg-opacity-70 p-8 rounded-2xl shadow-xl max-w-md w-full flex flex-col items-center">
        <h1 className="text-3xl font-bold text-yellow-300 mb-6 font-gooddog text-center">SUI Whitelist Checker</h1>
        <form onSubmit={handleCheck} className="w-full flex flex-col items-center gap-4">
          <input
            type="text"
            value={wallet}
            onChange={(e) => setWallet(e.target.value)}
            placeholder="Paste your SUI wallet (0x...)"
            className="w-full px-4 text-white py-2 rounded-lg border-2 border-yellow-400 focus:outline-none focus:border-yellow-600 text-black text-lg"
            disabled={loading}
            autoFocus
          />
          <button
            type="submit"
            className="bg-yellow-400 text-black font-bold px-6 py-2 rounded-lg shadow hover:bg-yellow-300 transition text-lg"
            disabled={loading}
          >
            {loading ? "Checking..." : "Check"}
          </button>
        </form>
        {result && <div className="mt-6 text-xl text-green-300 text-center font-gooddog">{result}</div>}
        {error && <div className="mt-6 text-xl text-red-400 text-center font-gooddog">{error}</div>}
      </div>
    </div>
  );
} 