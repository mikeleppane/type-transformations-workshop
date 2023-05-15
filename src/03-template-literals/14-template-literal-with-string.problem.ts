type Route = unknown;

export const goToRoute = (route: `/${string}`) => {};

// Should succeed:

goToRoute("/users");
goToRoute("/");
goToRoute("/admin/users");

// Should error:

// @ts-expect-error
goToRoute("users/1");
// @ts-expect-error
goToRoute("http://facebook.com");
