import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = '30-Day Keto Reset by Olena Marchenko'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #1A3C2B 0%, #2D5A3D 60%, #1a4a30 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '80px',
          fontFamily: 'serif',
        }}
      >
        {/* Left: text */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '620px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#7CB87A' }} />
            <span style={{ fontSize: 18, color: 'rgba(124,184,122,0.9)', letterSpacing: '0.2em', textTransform: 'uppercase', fontFamily: 'sans-serif' }}>
              Olena Marchenko
            </span>
          </div>
          <h1 style={{ fontSize: 72, fontWeight: 700, color: '#F4F9F4', lineHeight: 1.1, margin: 0 }}>
            30-Day<br />Keto Reset
          </h1>
          <p style={{ fontSize: 26, color: 'rgba(244,249,244,0.7)', margin: 0, fontFamily: 'sans-serif', lineHeight: 1.4 }}>
            80+ recipes · 4-week meal plan · Instant PDF download
          </p>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            marginTop: '8px',
          }}>
            <span style={{ fontSize: 48, fontWeight: 700, color: '#7CB87A' }}>$27</span>
            <span style={{ fontSize: 22, color: 'rgba(244,249,244,0.5)', textDecoration: 'line-through', fontFamily: 'sans-serif' }}>$49</span>
            <span style={{ fontSize: 16, color: '#1A3C2B', background: '#7CB87A', padding: '4px 14px', borderRadius: 99, fontFamily: 'sans-serif', fontWeight: 600 }}>45% OFF</span>
          </div>
        </div>

        {/* Right: book cover mockup */}
        <div style={{
          width: 220,
          height: 290,
          borderRadius: 20,
          background: 'rgba(255,255,255,0.08)',
          border: '1.5px solid rgba(124,184,122,0.3)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '32px 24px',
          gap: '12px',
          boxShadow: '0 32px 64px rgba(0,0,0,0.3)',
        }}>
          <div style={{
            width: 56,
            height: 56,
            borderRadius: '50%',
            background: 'rgba(124,184,122,0.2)',
            border: '1.5px solid rgba(124,184,122,0.4)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <div style={{ width: 28, height: 28, borderRadius: '50%', background: '#7CB87A', opacity: 0.85 }} />
          </div>
          <span style={{ fontSize: 11, color: 'rgba(143,184,157,0.85)', letterSpacing: '0.2em', textTransform: 'uppercase', fontFamily: 'sans-serif' }}>
            Olena Marchenko
          </span>
          <span style={{ fontSize: 20, fontWeight: 700, color: '#F4F9F4', textAlign: 'center', lineHeight: 1.2 }}>
            30-Day{'\n'}Keto Reset
          </span>
          <div style={{ width: 40, height: 1, background: 'rgba(124,184,122,0.4)' }} />
          <span style={{ fontSize: 11, color: 'rgba(143,184,157,0.7)', textAlign: 'center', fontFamily: 'sans-serif' }}>
            PDF Instant Download
          </span>
        </div>
      </div>
    ),
    { ...size }
  )
}
