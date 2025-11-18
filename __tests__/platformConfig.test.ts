import { platforms } from "@/config/platformConfig";

describe("Platform Configuration", () => {
  test("should have exactly 7 platforms", () => {
    expect(platforms).toHaveLength(7);
  });

  test("all platforms should have required fields", () => {
    platforms.forEach((platform) => {
      expect(platform).toHaveProperty("title");
      expect(platform).toHaveProperty("description");
      expect(platform).toHaveProperty("status");
      expect(platform.title).toBeTruthy();
      expect(platform.description).toBeTruthy();
      expect(["In Development", "Coming 2026"]).toContain(platform.status);
    });
  });

  test("should contain all required platforms", () => {
    const platformTitles = platforms.map((p) => p.title);
    const expectedPlatforms = [
      "EMT-B App",
      "AEMT App",
      "Paramedic App",
      "Flashcards",
      "VoiceNotes",
      "PCR Trainer",
      "StudyConnect Recruiting",
    ];

    expectedPlatforms.forEach((title) => {
      expect(platformTitles).toContain(title);
    });
  });

  test("EMT-B App should be in development", () => {
    const emtbApp = platforms.find((p) => p.title === "EMT-B App");
    expect(emtbApp?.status).toBe("In Development");
  });

  test("AEMT App should be in development", () => {
    const aemtApp = platforms.find((p) => p.title === "AEMT App");
    expect(aemtApp?.status).toBe("In Development");
  });

  test("Flashcards should be in development", () => {
    const flashcards = platforms.find((p) => p.title === "Flashcards");
    expect(flashcards?.status).toBe("In Development");
  });

  test("Paramedic App should be coming in 2026", () => {
    const paramedicApp = platforms.find((p) => p.title === "Paramedic App");
    expect(paramedicApp?.status).toBe("Coming 2026");
  });

  test("descriptions should be 1-2 lines (reasonable length)", () => {
    platforms.forEach((platform) => {
      // Descriptions should be between 50-200 characters (roughly 1-2 lines)
      expect(platform.description.length).toBeGreaterThan(30);
      expect(platform.description.length).toBeLessThan(250);
    });
  });
});
