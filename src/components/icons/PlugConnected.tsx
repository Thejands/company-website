import PlugConnectedIcon from "./plug-connected-icon";

export interface PlugConnectedProps {
  size?: number;
  className?: string;
  strokeWidth?: number;
}

/** Animated plug icon from itshover (hover to connect). */
export default function PlugConnected({
  size = 22,
  className = "text-ink",
  strokeWidth = 1.75,
}: PlugConnectedProps) {
  return (
    <PlugConnectedIcon
      size={size}
      className={className}
      strokeWidth={strokeWidth}
    />
  );
}
