import {
  ApplicationClient,
  ApplicationConfig,
} from "@gofynd/fdk-client-javascript";
import { NextResponse } from "next/server";

const config = new ApplicationConfig({
  applicationID: "65bcbae9b0faec450f60dd3f",
  applicationToken: "qxwV37U7p",
});

const applicationClient: any = new ApplicationClient(config);

export async function GET() {
  try {
    const product = await applicationClient.catalog.getProducts();
    return NextResponse.json(product);
  } catch (err) {
    console.log(err);
  }
}
