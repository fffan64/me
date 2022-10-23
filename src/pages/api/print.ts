// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import edgeChromium from 'chrome-aws-lambda';
import { NextApiRequest, NextApiResponse } from 'next';
import puppeteerDev from 'puppeteer';
import puppeteer from 'puppeteer-core';

// const generatePDF = async (html = '') => {
//   const browser = await puppeteer.launch()
//   const page = await browser.newPage()
//   await page.setContent(html, { waitUntil: 'networkidle0' })
//   const pdfBuffer = await page.pdf({ format: 'a4' })

//   await page.close()
//   await browser.close()

//   return pdfBuffer
// };

const generatePDFFromUrl = async (url = '') => {

  // Edge executable will return an empty string locally.
  const executablePath = await edgeChromium.executablePath;

  let browser;
  if (!executablePath) {
    browser = await puppeteerDev.launch();
  } else {
    browser = await puppeteer.launch({
      executablePath,
      args: edgeChromium.args,
      headless: false,
    })
  }

  const page = await browser.newPage()
  await page.goto(url, { waitUntil: 'networkidle0' })
  const pdfBuffer = await page.pdf({ format: 'a4', scale: 0.52, margin: {
    top: '1cm',
  }, })

  await page.close()
  await browser.close()

  return pdfBuffer;
};

export default async function printPdf(req: NextApiRequest, res: NextApiResponse) {
  const pdf = await generatePDFFromUrl(req.query.url as string);
  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Length', pdf.length);
  res.send(pdf);
}

// export default async function printPdf(req: NextApiRequest, res: NextApiResponse) {
//   const pdf = await generatePDF(req.body);
//   res.setHeader('Content-Type', 'application/pdf');
//   res.setHeader('Content-Length', pdf.length);
//   res.send(pdf);
// }
