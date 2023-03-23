import prepareNavigationRoutes from "./routes/prepareNavigationRoutes.js"
import preparePagesRoutes from "./routes/preparePagesRoutes.js"
import prepareUsersRoutes from "./routes/prepareUsersRoutes.js"

const prepareRoutes = (ctx) => {
  prepareUsersRoutes(ctx)
  prepareNavigationRoutes(ctx)
  preparePagesRoutes(ctx)
}

export default prepareRoutes
