import { useEffect, useState } from "react";
import RateLimitedAlert from "@/components/RateLimitedAlert";
import TodoGrid from "@/components/TodoGrid";
import axiosInstance from "@/lib/axios";
import { toast } from "sonner";

const HomePage = () => {
  const [isRateLimited, setIsRateLimited] = useState(false);
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const response = await axiosInstance.get("/notes");
        const data = response.data;

        setNotes(data);
        setIsRateLimited(false);

        console.log(data);
      } catch (error) {
        console.error("Error fetching notes:", error);

        if (error.response?.status === 429) {
          setIsRateLimited(true);
        } else {
          toast.error("Failed to fetch notes. Please try again later.");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchNotes();
  }, []);

  return (
    <div>
      {isRateLimited && <RateLimitedAlert />}

      {loading && "Loading..."}
      {/* onDelete={handleDelete}  */}
      {!isRateLimited && !loading && <TodoGrid data={notes} setNotes={setNotes} />}
    </div>
  );
};

export default HomePage;
