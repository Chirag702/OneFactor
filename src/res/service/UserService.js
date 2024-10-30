class UserService {
    // Method to check if About field is not empty or null
    static async checkAbout() {
        const authToken = localStorage.getItem("token");

        if (!authToken) {
            console.error("No auth token found in localStorage");
            return false;
        }

        try {
            const response = await fetch("https://api2.onefactor.in/api/user/profile", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${authToken}`
                }
            });

            if (!response.ok) {
                console.error("Failed to fetch About info:", response.statusText);
                return false;
            }

            const data = await response.json();

            // Check if About field is not empty or null
            return data.about && data.about.trim() !== "";
        } catch (error) {
            console.error("Error fetching About info:", error);
            return false;
        }
    }
}

export default UserService;
