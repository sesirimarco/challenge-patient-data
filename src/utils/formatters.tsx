import { format } from "date-fns";

export const formatDateTime = (dateTimeString: string) => {
	const dateTime = new Date(dateTimeString);

	// eslint-disable-next-line @typescript-eslint/no-unsafe-call
	return format(dateTime, "MM/dd/yyyy HH:mm a ") as string;
};
