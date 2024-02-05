type NavbarItem = "home" | "patientList" | "schedule" | "dcmViewer" | "confirm" | "aiSeg" | "train";

export type DashBoardItem = "Newly Added CT" | "Contouring Required" | "Planning Required" | "Patient QA Required" | "Chart-check Required" | "Treatment Schedule of Today"

export type NavbarItemList = {
	admin: NavbarItem[];
	user: NavbarItem[];
	guest: NavbarItem[];
};

export enum NavbarItemImage {
	"home" = "/icon/home.png",
	"patientList" = "/icon/patientList.png",
	"schedule" = "/icon/schedule.png",
	"dcmViewer" = "/icon/dcmViewer.png",
	"confirm" = "/icon/confirm.png",
	"aiSeg" = "/icon/aiseg.png",
	"train" = "/icon/train.png"
}


export type DashBoardItemList = {
	user: Record<DashBoardItem, number>[];
};

export interface User {
	name: string;
	photo: string;
	role: userRole;
	auth: userAuth;
}

export enum userRole {
	"Medical Docter",
	"Therapiest",
	"Nurse",
	"Dosimetrist",
	"Medical Physicist"
}

export enum userAuth {
	"admin",
	"user",
	"guest"
}