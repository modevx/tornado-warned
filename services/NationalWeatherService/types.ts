export interface ACTIVE_ALERT {
	areaDesc: string;
	effective: string;
	expires: string;
	severity: string;
	urgency: string;
	certainty: string;
	instruction: string;
}

export interface CANCELLED_ALERT {
	event: string;
	areaDesc: string;
	effective: string;
	description: string;
}
