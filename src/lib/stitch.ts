/**
 * Stitch (stitch.money) Integration
 * Local South African Payment Strategy
 */
export async function createContributionSession(amount: number, poolName: string = "Ubuntu Pool") {
  try {
    const response = await fetch("/api/create-contribution-session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount, poolName }),
    });

    const data = await response.json();
    if (data.url) {
      // In a real Stitch flow, this redirects to the Stitch bank-selector
      window.location.href = data.url;
    } else {
      throw new Error(data.error || "Failed to initiate Stitch payment");
    }
  } catch (error) {
    console.error("Stitch Payment Error:", error);
    alert("Could not initiate local payment. Please ensure Stitch environment is configured.");
  }
}
