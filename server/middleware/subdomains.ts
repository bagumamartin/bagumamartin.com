import { defineEventHandler, getRequestURL } from "h3";

export default defineEventHandler((event) => {
  const url = getRequestURL(event);
  const hostname = url.hostname;

  // Handle semmverse subdomain
  if (
    hostname === "semmverse.bagumamartin.com" ||
    hostname.startsWith("semmverse.")
  ) {
    // Remove any pathname prefix and ensure it starts with /semmverse
    event.node.req.url = `/semmverse${
      event.node.req.url === "/" ? "" : event.node.req.url
    }`;
    console.log(
      `[Subdomain middleware] Detected semmverse subdomain, routing to: ${event.node.req.url}`
    );
  }

  // Handle bodysync subdomain
  if (
    hostname === "bodysync.bagumamartin.com" ||
    hostname.startsWith("bodysync.")
  ) {
    // Remove any pathname prefix and ensure it starts with /bodysync
    event.node.req.url = `/bodysync${
      event.node.req.url === "/" ? "" : event.node.req.url
    }`;
    console.log(
      `[Subdomain middleware] Detected bodysync subdomain, routing to: ${event.node.req.url}`
    );
  }
});
