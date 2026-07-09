interface ImagePlaceholderProps {
  width?: string;
  height?: string;
  label?: string;
}

export default function ImagePlaceholder({ width, height, label }: ImagePlaceholderProps) {
  return (
    <div
      style={{
        width: width || '100%',
        height: height || '400px',
        backgroundColor: 'rgba(124, 139, 111, 0.12)',
        border: '1px dashed rgba(124, 139, 111, 0.4)',
        borderRadius: '4px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '8px',
      }}
    >
      <span style={{
        fontFamily: 'DM Sans, system-ui, sans-serif',
        fontSize: '11px',
        fontWeight: 400,
        letterSpacing: '0.06em',
        textTransform: 'uppercase',
        color: '#9C9088',
      }}>
        {label || 'Photo coming'}
      </span>
      <span style={{
        fontFamily: 'DM Sans, system-ui, sans-serif',
        fontSize: '10px',
        color: '#9C9088',
        opacity: 0.7,
      }}>
        {width} × {height}
      </span>
    </div>
  );
}
