import fs from "fs";
import path from "path";
import { NextRequest, NextResponse } from "next/server";

// export default function GET(request: NextRequest): NextResponse {
//   const filepath = path.join(process.cwd(), "public", "pdf-test.pdf");
//   const filename = "Isaac_CV.pdf";

//   if (!fs.existsSync(filepath)) {
//     return new NextResponse("Resume not found", { status: 404 });
//   }

//   const contentType = "application/pdf";

//   const fileBuffer = fs.readFileSync(filepath);

//   return new NextResponse(fileBuffer, {
//     headers: {
//       "Content-Disposition": `attachment; filename="${filename}"`,
//       "Content-Type": contentType,
//       "Content-Length": fileBuffer.length.toString(),
//     },
//   });
// }

export async function GET(request: NextRequest) {
  try {
    const filePath = path.join(process.cwd(), "public", "pdf-test.pdf");
    const fileName = "Isaac_CV.pdf";

    // Check if file exists
    if (!fs.existsSync(filePath)) {
      return new NextResponse("File not found", { status: 404 });
    }

    // Read the file
    const fileBuffer = fs.readFileSync(filePath);

    // Return response with download headers
    return new NextResponse(fileBuffer, {
      status: 200,
      headers: {
        "Content-Disposition": `attachment; filename="${fileName}"`,
        "Content-Type": "application/pdf",
        "Content-Length": fileBuffer.length.toString(),
      },
    });
  } catch (error) {
    console.error("Download error:", error);
    return new NextResponse("Internal server error", { status: 500 });
  }
}
