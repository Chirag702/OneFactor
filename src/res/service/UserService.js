class UserService {


    static async saveUser(companyName, yourRole, phone) {
        const authToken = localStorage.getItem("token");

        if (!authToken) {
            console.error("No auth token found in localStorage");
            return false;
        }

        const requestBody = {
            companyName,
            yourRole,
            phone
        };

        try {
            const response = await fetch("https://api3.onefactor.in/users/a", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${authToken}`
                },
                body: JSON.stringify(requestBody) // Add the body here
            });

            if (!response.ok) {
                console.error("Failed to save info:", response.statusText);
                return false;
            } else {
                console.log("Info saved successfully:", response.statusText); // Changed to console.log for success
                return true;
            }
        } catch (error) {
            console.error("Error fetching About info:", error);
            return false;
        }
    }

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
