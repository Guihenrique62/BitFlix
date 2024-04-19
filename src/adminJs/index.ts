import AdminJS from "adminjs";
import AdminJsExpress from '@adminjs/express'
import AdminJsSequelize from '@adminjs/sequelize'
import { sequelize } from "../database";
import { adminJsResources } from "./resources";
import { locale } from "./locale";
import { dashboardOptions } from "./dashboard";
import { brandingOptions } from "./branding";
import { authtenticationOptions } from "./authentication";

AdminJS.registerAdapter(AdminJsSequelize)

export const adminjs = new AdminJS({
    databases: [sequelize],
    rootPath: '/admin',
    resources: adminJsResources,
    branding: brandingOptions,
    locale: locale,
    dashboard: dashboardOptions
    
})

export const adminJsRouter = AdminJsExpress.buildAuthenticatedRouter(
    adminjs,
    authtenticationOptions, 
    null, 
  {
    resave: false,
    saveUninitialized: false
  }
)