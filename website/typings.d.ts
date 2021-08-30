import "vue-router";

declare module "vue-router" {
  interface RouteMeta {
    count?: number;
    label?: string;
    navigator?: boolean;
  }
}
