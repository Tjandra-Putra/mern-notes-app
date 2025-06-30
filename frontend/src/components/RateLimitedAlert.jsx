import { AlertCircleIcon } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function AlertDemo() {
  return (
    <Alert variant="destructive" className="flex items-start gap-4 p-7">
      <AlertCircleIcon className="h-5 w-5 mt-[6px] text-red-600" />
      <div>
        <AlertTitle>Rate Limit Reached</AlertTitle>
        <AlertDescription>
          <p>You have reached the maximum number of requests allowed. Please try again later.</p>
          <ul className="list-inside list-disc text-sm mt-2">
            <li>Check your API usage limits.</li>
            <li>Contact support if you believe this is an error.</li>
          </ul>
        </AlertDescription>
      </div>
    </Alert>
  );
}
