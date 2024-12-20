/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './pages/__root'
import { Route as LayoutImport } from './pages/_layout'
import { Route as LayoutIndexImport } from './pages/_layout/index'
import { Route as LayoutContactImport } from './pages/_layout/contact'
import { Route as LayoutAboutImport } from './pages/_layout/about'

// Create/Update Routes

const LayoutRoute = LayoutImport.update({
  id: '/_layout',
  getParentRoute: () => rootRoute,
} as any)

const LayoutIndexRoute = LayoutIndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => LayoutRoute,
} as any)

const LayoutContactRoute = LayoutContactImport.update({
  id: '/contact',
  path: '/contact',
  getParentRoute: () => LayoutRoute,
} as any)

const LayoutAboutRoute = LayoutAboutImport.update({
  id: '/about',
  path: '/about',
  getParentRoute: () => LayoutRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/_layout': {
      id: '/_layout'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof LayoutImport
      parentRoute: typeof rootRoute
    }
    '/_layout/about': {
      id: '/_layout/about'
      path: '/about'
      fullPath: '/about'
      preLoaderRoute: typeof LayoutAboutImport
      parentRoute: typeof LayoutImport
    }
    '/_layout/contact': {
      id: '/_layout/contact'
      path: '/contact'
      fullPath: '/contact'
      preLoaderRoute: typeof LayoutContactImport
      parentRoute: typeof LayoutImport
    }
    '/_layout/': {
      id: '/_layout/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof LayoutIndexImport
      parentRoute: typeof LayoutImport
    }
  }
}

// Create and export the route tree

interface LayoutRouteChildren {
  LayoutAboutRoute: typeof LayoutAboutRoute
  LayoutContactRoute: typeof LayoutContactRoute
  LayoutIndexRoute: typeof LayoutIndexRoute
}

const LayoutRouteChildren: LayoutRouteChildren = {
  LayoutAboutRoute: LayoutAboutRoute,
  LayoutContactRoute: LayoutContactRoute,
  LayoutIndexRoute: LayoutIndexRoute,
}

const LayoutRouteWithChildren =
  LayoutRoute._addFileChildren(LayoutRouteChildren)

export interface FileRoutesByFullPath {
  '': typeof LayoutRouteWithChildren
  '/about': typeof LayoutAboutRoute
  '/contact': typeof LayoutContactRoute
  '/': typeof LayoutIndexRoute
}

export interface FileRoutesByTo {
  '/about': typeof LayoutAboutRoute
  '/contact': typeof LayoutContactRoute
  '/': typeof LayoutIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/_layout': typeof LayoutRouteWithChildren
  '/_layout/about': typeof LayoutAboutRoute
  '/_layout/contact': typeof LayoutContactRoute
  '/_layout/': typeof LayoutIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '' | '/about' | '/contact' | '/'
  fileRoutesByTo: FileRoutesByTo
  to: '/about' | '/contact' | '/'
  id:
    | '__root__'
    | '/_layout'
    | '/_layout/about'
    | '/_layout/contact'
    | '/_layout/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  LayoutRoute: typeof LayoutRouteWithChildren
}

const rootRouteChildren: RootRouteChildren = {
  LayoutRoute: LayoutRouteWithChildren,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/_layout"
      ]
    },
    "/_layout": {
      "filePath": "_layout.tsx",
      "children": [
        "/_layout/about",
        "/_layout/contact",
        "/_layout/"
      ]
    },
    "/_layout/about": {
      "filePath": "_layout/about.tsx",
      "parent": "/_layout"
    },
    "/_layout/contact": {
      "filePath": "_layout/contact.tsx",
      "parent": "/_layout"
    },
    "/_layout/": {
      "filePath": "_layout/index.tsx",
      "parent": "/_layout"
    }
  }
}
ROUTE_MANIFEST_END */
