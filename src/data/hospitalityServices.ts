import type { LucideIcon } from "lucide-react";
import {
  CalendarCheck,
  Sparkles,
  ShieldCheck,
  Bell,
  KeyRound,
  BedDouble,
  Eye,
  FileText,
} from "lucide-react";

export interface HospitalityService {
  title: string;
  icon: LucideIcon;
}

export const hospitalityServices: HospitalityService[] = [
  { title: "Guest Reservations", icon: CalendarCheck },
  { title: "Check-in Coordination", icon: KeyRound },
  { title: "Housekeeping", icon: Sparkles },
  { title: "Villa Readiness", icon: BedDouble },
  { title: "Property Inspections", icon: ShieldCheck },
  { title: "Concierge Coordination", icon: Bell },
  { title: "Booking Visibility", icon: Eye },
  { title: "Owner Reporting", icon: FileText },
];
