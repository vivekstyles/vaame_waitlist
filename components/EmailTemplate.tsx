import {
  Body,
  Container,
  Head,
  Html,
  Img,
  Preview,
  Section,
  Text,
} from "@react-email/components";

export const EmailTemplate = () => {
  // Use PNG/JPEG logo, not SVG
  const fallbackLogo =
    "https://waitlist.vaame.tech/vaame.png"; // <-- use PNG/JPEG here
  const siteLogo = process.env.NEXT_PUBLIC_LOGO || fallbackLogo;

  return (
    <Html>
      <Head />
      {/* <Preview>{`You’re on the waitlist for ${process.env.NEXT_PUBLIC_SITE_NAME}`}</Preview> */}
      <Body style={main}>
        <Container style={container}>
          <Section>
            <Text style={header as any}>
              {`Welcome to ${process.env.NEXT_PUBLIC_SITE_NAME}!`}
            </Text>
            <Img
              style={img}
              src={siteLogo} // <-- use siteLogo variable
              width="100"
              height="100"
              alt="Logo"
            />
            <Text
              style={text}
            >{`Big welcome and thanks for subscribing ${process.env.NEXT_PUBLIC_SITE_NAME}`}</Text>
            <Text style={text}>
              {`You're officially on the waitlist for ${process.env.NEXT_PUBLIC_SITE_NAME}!`}
            </Text>
            <Text style={text}>
              Thank you for signing up. We’re excited to have you join our
              community!
            </Text>
            <Text style={text}>
              We’ll keep you updated on your spot and notify you as soon as you
              get access.
            </Text>
            <Text style={text}>
              If you have any questions, just reply to this email.
            </Text>
            <Text style={text}>
              – The {process.env.NEXT_PUBLIC_SITE_NAME} Team
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

const main = {
  backgroundColor: "#f6f9fc",
  padding: "30px 0",
  minHeight: "100vh",
};

const container = {
  backgroundColor: "#0E0C15",
  borderRadius: "12px",
  boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
  border: "1px solidrgb(255, 255, 255)",
  padding: "40px 32px 32px 32px",
  maxWidth: "420px",
  margin: "40px auto",
};

const img = {
  display: "block",
  margin: "0 auto 24px auto",
  borderRadius: "50%",
  background: "rgba(0,0,0,0.04)",
  boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
  padding: "12px",
};

const text = {
  fontSize: "16px",
  fontFamily:
    "'Open Sans', 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial, 'Lucida Grande', sans-serif",
  fontWeight: "400",
  color: "#fff", // <-- changed to pure white
  lineHeight: "26px",
  margin: "16px 0",
};

const anchor = {
  textDecoration: "underline",
  color: "#5f6fff",
};

const header = {
  textAlign: "center",
  fontSize: "22px",
  fontWeight: "700",
  color: "#5f6fff",
  marginBottom: "12px",
  marginTop: "0",
  letterSpacing: "0.5px",
};
