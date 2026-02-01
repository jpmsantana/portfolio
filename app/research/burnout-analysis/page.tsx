import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "Decoding Work From Home Burnout: A Machine Learning Deep Dive",
  description:
    "Can we predict employee burnout before it happens? A data-driven exploration of 1,800+ work patterns using Random Forest, SHAP analysis, and feature engineering.",
};

export default function BurnoutAnalysisPage() {
  return (
    <>
      <nav className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-sm">
        <div className="mx-auto flex max-w-3xl items-center px-6 py-3">
          <Button variant="ghost" size="sm" asChild>
            <Link href="/#research">&larr; Back</Link>
          </Button>
        </div>
      </nav>

      <article className="mx-auto max-w-3xl px-6 py-16">
        {/* Header */}
        <header>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Decoding Work From Home Burnout: A Machine Learning Deep Dive
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Can we predict employee burnout before it happens? A data-driven
            exploration of 1,800+ work patterns to uncover the hidden drivers of
            burnout.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <span className="text-sm text-muted-foreground">12 min read</span>
            <Badge variant="secondary">Machine Learning</Badge>
            <Badge variant="secondary">Data Analysis</Badge>
            <Badge variant="secondary">Employee Wellness</Badge>
          </div>
        </header>

        <Separator className="my-12" />

        {/* The Problem */}
        <section>
          <h2 className="text-2xl font-bold tracking-tight">
            The Problem We&apos;re Solving
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Remote work has created an &quot;invisible epidemic&quot; of employee
            burnout. The WHO officially recognizes burnout as an
            &quot;occupational phenomenon,&quot; yet most organizations still
            rely on annual surveys and gut feelings to address it.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            The question: Can we predict and prevent burnout before employees
            reach critical breaking point? Our analysis achieves{" "}
            <strong className="text-foreground">94% R²</strong> (variance
            explained) on 1,800 observations from 180 employees.
          </p>
        </section>

        <Separator className="my-12" />

        {/* The Dataset */}
        <section>
          <h2 className="text-2xl font-bold tracking-tight">The Dataset</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Sourced from the Kaggle Work From Home Employee Burnout Dataset, our
            data captures detailed work patterns across multiple dimensions.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
            <Card>
              <CardContent className="pt-6 text-center">
                <p className="text-3xl font-bold">1,800</p>
                <p className="text-sm text-muted-foreground">Observations</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <p className="text-3xl font-bold">180</p>
                <p className="text-sm text-muted-foreground">Employees</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <p className="text-3xl font-bold">11</p>
                <p className="text-sm text-muted-foreground">Features</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <p className="text-3xl font-bold">0</p>
                <p className="text-sm text-muted-foreground">Missing Values</p>
              </CardContent>
            </Card>
          </div>

          <h3 className="mt-8 text-lg font-semibold">Key Features Tracked</h3>
          <ul className="mt-4 space-y-2 text-muted-foreground">
            <li>
              <strong className="text-foreground">Work Hours:</strong> 3.0 –
              12.17 hours/day
            </li>
            <li>
              <strong className="text-foreground">Screen Time:</strong> Total
              daily exposure
            </li>
            <li>
              <strong className="text-foreground">Meeting Count:</strong> 0–10
              meetings
            </li>
            <li>
              <strong className="text-foreground">Breaks Taken:</strong> 0–5
              breaks
            </li>
            <li>
              <strong className="text-foreground">After-Hours Work:</strong>{" "}
              Binary indicator
            </li>
            <li>
              <strong className="text-foreground">Sleep Hours:</strong> Hours
              obtained
            </li>
            <li>
              <strong className="text-foreground">
                Task Completion Rate:
              </strong>{" "}
              40–107%
            </li>
            <li>
              <strong className="text-foreground">Burnout Score:</strong> 2.5 –
              143.92
            </li>
          </ul>

          <h3 className="mt-8 text-lg font-semibold">Distribution Insights</h3>
          <ul className="mt-4 space-y-2 text-muted-foreground">
            <li>Class imbalance: 84.8% Low, 14.1% Medium, 1.1% High burnout risk</li>
            <li>Work hours cluster around ~6.5 hours daily</li>
            <li>Screen time averages 9.27 hours (exceeds work time)</li>
            <li>
              Bimodal break distribution: employees take either 3 breaks
              (healthy) or extremes (1 or 5)
            </li>
          </ul>
        </section>

        <Separator className="my-12" />

        {/* Methodology */}
        <section>
          <h2 className="text-2xl font-bold tracking-tight">
            Methodology: Multi-Faceted Approach
          </h2>
          <ol className="mt-4 space-y-2 text-muted-foreground list-decimal list-inside">
            <li>Exploratory Data Analysis (EDA)</li>
            <li>Feature Engineering (10+ derived metrics)</li>
            <li>Statistical Hypothesis Testing (t-tests, ANOVA)</li>
            <li>Clustering Analysis (unsupervised learning)</li>
            <li>Predictive Modeling (7 different ML algorithms)</li>
            <li>Model Interpretability (SHAP analysis)</li>
            <li>Threshold Analysis (critical intervention points)</li>
          </ol>
        </section>

        <Separator className="my-12" />

        {/* Key Findings */}
        <section>
          <h2 className="text-2xl font-bold tracking-tight">Key Findings</h2>

          <Card className="mt-8 border-l-4 border-l-blue-500">
            <CardHeader>
              <CardTitle className="text-lg">
                Finding #1: Burnout is Highly Predictable
              </CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              <p>
                Random Forest achieves a{" "}
                <strong className="text-foreground">0.94 R² score</strong>,
                explaining 94% of burnout variance. We can identify at-risk
                employees weeks or months before critical burnout.
              </p>
            </CardContent>
          </Card>

          <Card className="mt-6 border-l-4 border-l-green-500">
            <CardHeader>
              <CardTitle className="text-lg">
                Finding #2: Top Predictors Revealed
              </CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground space-y-2">
              <p>
                <strong className="text-foreground">
                  task_completion_rate
                </strong>{" "}
                is the strongest single predictor (3x more impact than others).
              </p>
              <p>
                Key correlations: work-life balance vs burnout:{" "}
                <strong className="text-foreground">-0.96</strong> (strongest
                protective factor), work hours vs burnout:{" "}
                <strong className="text-foreground">0.12</strong> (surprisingly
                weak).
              </p>
              <p>
                Burnout isn&apos;t about working too much — it&apos;s about
                working inefficiently, lacking recovery time, and poor work-life
                boundaries.
              </p>
            </CardContent>
          </Card>

          <Card className="mt-6 border-l-4 border-l-yellow-500">
            <CardHeader>
              <CardTitle className="text-lg">
                Finding #3: Critical Thresholds Exist
              </CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              <ul className="space-y-1">
                <li>Work hours &gt; 8 hours/day: risk accelerates</li>
                <li>Sleep &lt; 6 hours/night: major risk factor</li>
                <li>Breaks: quality matters more than quantity</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="mt-6 border-l-4 border-l-red-500">
            <CardHeader>
              <CardTitle className="text-lg">
                Finding #4: After-Hours Work is Devastating
              </CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground space-y-2">
              <p>
                After-hours work adds{" "}
                <strong className="text-foreground">
                  +15–20 burnout points
                </strong>{" "}
                on average.
              </p>
              <p>
                Without after-hours: 35.42 mean burnout. With after-hours:
                52.18. Difference:{" "}
                <strong className="text-foreground">
                  +16.76 points (p &lt; 0.001)
                </strong>
                .
              </p>
            </CardContent>
          </Card>

          <Card className="mt-6 border-l-4 border-l-purple-500">
            <CardHeader>
              <CardTitle className="text-lg">
                Finding #5: Two Dominant Burnout Personas
              </CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground space-y-2">
              <p>
                <strong className="text-foreground">
                  Persona 1: Moderate Burnout — Overworked (~67% of
                  observations)
                </strong>{" "}
                — the &quot;sustainable majority&quot; with manageable levels who
                respond well to preventive interventions.
              </p>
              <p>
                <strong className="text-foreground">
                  Persona 2: High Burnout — Overextended (~33% of observations)
                </strong>{" "}
                — a &quot;critical intervention&quot; group requiring immediate
                support, characterized by low task completion and high workload.
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* Model Performance */}
        <section>
          <h2 className="text-2xl font-bold tracking-tight">
            Model Performance
          </h2>
          <p className="mt-4 text-muted-foreground">
            Seven models were evaluated. Even simple linear regression achieves
            93.6% R², proving the signal is extremely strong.
          </p>

          <div className="mt-6 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b text-left">
                  <th className="py-3 pr-4 font-semibold">Model</th>
                  <th className="py-3 pr-4 font-semibold">R² Score</th>
                  <th className="py-3 pr-4 font-semibold">RMSE</th>
                  <th className="py-3 font-semibold">Cross-Val</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr className="border-b font-medium text-foreground">
                  <td className="py-3 pr-4">Random Forest</td>
                  <td className="py-3 pr-4">0.9412</td>
                  <td className="py-3 pr-4">5.82</td>
                  <td className="py-3">0.9385</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4">XGBoost</td>
                  <td className="py-3 pr-4">0.9389</td>
                  <td className="py-3 pr-4">5.94</td>
                  <td className="py-3">0.9361</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4">Gradient Boosting</td>
                  <td className="py-3 pr-4">0.9201</td>
                  <td className="py-3 pr-4">6.78</td>
                  <td className="py-3">0.9178</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4">Lasso Regression</td>
                  <td className="py-3 pr-4">0.9365</td>
                  <td className="py-3 pr-4">6.05</td>
                  <td className="py-3">0.9358</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4">Ridge Regression</td>
                  <td className="py-3 pr-4">0.9362</td>
                  <td className="py-3 pr-4">6.07</td>
                  <td className="py-3">0.9355</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4">Linear Regression</td>
                  <td className="py-3 pr-4">0.9362</td>
                  <td className="py-3 pr-4">6.07</td>
                  <td className="py-3">0.9355</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4">Decision Tree</td>
                  <td className="py-3 pr-4">0.8934</td>
                  <td className="py-3 pr-4">7.82</td>
                  <td className="py-3">0.8756</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <Separator className="my-12" />

        {/* SHAP Analysis */}
        <section>
          <h2 className="text-2xl font-bold tracking-tight">
            SHAP Model Interpretability Analysis
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            SHAP (SHapley Additive exPlanations) values reveal how each feature
            contributes to individual predictions.
          </p>

          <h3 className="mt-8 text-lg font-semibold">
            Global Feature Importance
          </h3>
          <ol className="mt-4 space-y-2 text-muted-foreground list-decimal list-inside">
            <li>
              <strong className="text-foreground">task_completion_rate:</strong>{" "}
              ~18 points average impact (dominates by 3x)
            </li>
            <li>
              <strong className="text-foreground">
                screen_to_work_ratio:
              </strong>{" "}
              ~2.5 points
            </li>
            <li>
              <strong className="text-foreground">stress_indicator:</strong>{" "}
              ~2.3 points
            </li>
            <li>
              <strong className="text-foreground">
                total_workload_indicator:
              </strong>{" "}
              ~1.8 points
            </li>
          </ol>

          <h3 className="mt-8 text-lg font-semibold">
            Case Study: Low Burnout (Score 9.07)
          </h3>
          <div className="mt-4 rounded-lg bg-muted p-4 font-mono text-sm overflow-x-auto">
            <pre>{`Base prediction: 44.3
task_completion_rate = 98.9% → -34.19 points (massive protective effect)
stress_indicator = 0.053  → +0.37 points
productivity_score = 23.9 → -0.30 points
work_life_balance = 54.1  → -0.20 points
work_hours = 4.14         → -0.09 points
Final: 9.07`}</pre>
          </div>
          <p className="mt-3 text-sm text-muted-foreground">
            Near-perfect task completion single-handedly reduced burnout by 34
            points.
          </p>

          <h3 className="mt-8 text-lg font-semibold">
            Case Study: High Burnout (Score 107.16)
          </h3>
          <div className="mt-4 rounded-lg bg-muted p-4 font-mono text-sm overflow-x-auto">
            <pre>{`Base prediction: 44.3
task_completion_rate = 40%  → +60.15 points (devastating)
screen_to_work_ratio = 2.04 → +1.49 points
stress_indicator = 0.058    → +0.99 points
screen_time_hours = 7.22    → +0.74 points
work_life_balance = 55.2    → +0.15 points
Final: 107.16`}</pre>
          </div>
          <p className="mt-3 text-sm text-muted-foreground">
            Low task completion (40%) added a crushing 60 points, overwhelming
            all other factors.
          </p>
        </section>

        <Separator className="my-12" />

        {/* Intervention Thresholds */}
        <section>
          <h2 className="text-2xl font-bold tracking-tight">
            Critical Intervention Thresholds
          </h2>

          <div className="mt-6 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b text-left">
                  <th className="py-3 pr-4 font-semibold">Metric</th>
                  <th className="py-3 pr-4 font-semibold">Medium Risk</th>
                  <th className="py-3 pr-4 font-semibold">High Risk</th>
                  <th className="py-3 font-semibold">Action</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr className="border-b">
                  <td className="py-3 pr-4">Work Hours</td>
                  <td className="py-3 pr-4">~7 hrs/day</td>
                  <td className="py-3 pr-4">Plateaus</td>
                  <td className="py-3">Monitor at 7h, intervene at 8–9h</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4">Screen Time</td>
                  <td className="py-3 pr-4">&gt;9 hours</td>
                  <td className="py-3 pr-4">&gt;11 hours</td>
                  <td className="py-3">Implement screen-free periods</td>
                </tr>
                <tr className="border-b font-medium text-foreground">
                  <td className="py-3 pr-4">Stress Indicator</td>
                  <td className="py-3 pr-4">&gt;0.3</td>
                  <td className="py-3 pr-4">&gt;0.5</td>
                  <td className="py-3">Immediate intervention</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4">Sleep Hours</td>
                  <td className="py-3 pr-4" colSpan={2}>
                    No clear threshold
                  </td>
                  <td className="py-3">
                    Maintain 7–8h + other interventions
                  </td>
                </tr>
                <tr>
                  <td className="py-3 pr-4">Breaks Taken</td>
                  <td className="py-3 pr-4" colSpan={2}>
                    No clear threshold
                  </td>
                  <td className="py-3">Focus on quality, not quantity</td>
                </tr>
              </tbody>
            </table>
          </div>

          <Card className="mt-8 border-l-4 border-l-yellow-500">
            <CardContent className="pt-6 text-muted-foreground">
              <p>
                <strong className="text-foreground">Work Hours Paradox:</strong>{" "}
                Burnout rises from 3–7 hours (reaching ~47 at 9 hours), then
                plateaus — additional hours don&apos;t make burnout worse,
                suggesting cumulative damage is already done.
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* Risk Score System */}
        <section>
          <h2 className="text-2xl font-bold tracking-tight">
            Risk Score System (0–11 Scale)
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            A simple rule-based scoring system that approximates the ML model
            for practical day-to-day use.
          </p>
          <div className="mt-6 rounded-lg bg-muted p-4 font-mono text-sm overflow-x-auto">
            <pre>{`score = 0
if work_hours > 8:        score += 2
elif work_hours > 6.5:    score += 1
if sleep_hours < 6:       score += 2
elif sleep_hours < 7:     score += 1
if breaks < 2:            score += 2
elif breaks < 3:          score += 1
if after_hours_work:      score += 2
if stress_indicator > 0.7: score += 2
elif stress_indicator > 0.5: score += 1`}</pre>
          </div>
          <div className="mt-6 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b text-left">
                  <th className="py-3 pr-4 font-semibold">Score</th>
                  <th className="py-3 pr-4 font-semibold">Zone</th>
                  <th className="py-3 font-semibold">Mean Burnout</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr className="border-b">
                  <td className="py-3 pr-4">0–2</td>
                  <td className="py-3 pr-4">Safe</td>
                  <td className="py-3">~39</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4">3–5</td>
                  <td className="py-3 pr-4">Watch</td>
                  <td className="py-3">~43–45</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4">6–8</td>
                  <td className="py-3 pr-4">Intervention needed</td>
                  <td className="py-3">~44–50</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4">9–11</td>
                  <td className="py-3 pr-4 font-medium text-foreground">
                    Crisis
                  </td>
                  <td className="py-3">~47–67</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <Separator className="my-12" />

        {/* Recommendations */}
        <section>
          <h2 className="text-2xl font-bold tracking-tight">
            Actionable Recommendations
          </h2>

          <h3 className="mt-8 text-lg font-semibold">
            For Individual Employees
          </h3>
          <ol className="mt-4 space-y-2 text-muted-foreground list-decimal list-inside">
            <li>Focus on task completion, not just effort</li>
            <li>Track task completion rate weekly (alert if &lt;70%)</li>
            <li>Eliminate after-hours work with hard boundaries</li>
            <li>Manage screen time aggressively</li>
            <li>Prioritize break quality over quantity</li>
            <li>Maintain 7–8 hours sleep (necessary but not sufficient)</li>
          </ol>

          <h3 className="mt-8 text-lg font-semibold">
            For Managers &amp; Team Leads
          </h3>
          <ol className="mt-4 space-y-2 text-muted-foreground list-decimal list-inside">
            <li>Monitor task completion rates, not just hours</li>
            <li>Use the 0–11 risk score system weekly</li>
            <li>
              Diagnose low completion root causes (skills, clarity, workload,
              blockers)
            </li>
            <li>Identify and support high-burnout cluster members</li>
            <li>Eliminate after-hours work culture</li>
          </ol>

          <h3 className="mt-8 text-lg font-semibold">
            For HR &amp; Organizational Leadership
          </h3>
          <ol className="mt-4 space-y-2 text-muted-foreground list-decimal list-inside">
            <li>Deploy Random Forest model (94% R²) organization-wide</li>
            <li>
              Reframe burnout as an effectiveness problem, not a resilience
              issue
            </li>
            <li>
              Create two-track support: immediate workload reduction for
              overextended (33%), preventive programs for overworked (67%)
            </li>
            <li>Move from annual surveys to continuous weekly monitoring</li>
            <li>
              Measure ROI: burnout trends, cluster movement, turnover,
              productivity, healthcare costs
            </li>
          </ol>
        </section>

        <Separator className="my-12" />

        {/* Limitations */}
        <section>
          <h2 className="text-2xl font-bold tracking-tight">
            Limitations &amp; Future Work
          </h2>
          <ul className="mt-4 space-y-2 text-muted-foreground list-disc list-inside">
            <li>Observational data (correlation ≠ causation)</li>
            <li>
              Class imbalance (only 1.1% High Risk observations)
            </li>
            <li>Self-reported bias potential</li>
            <li>No extended temporal tracking (6+ months)</li>
            <li>
              Missing context (industry, company size, role, team dynamics)
            </li>
          </ul>

          <h3 className="mt-8 text-lg font-semibold">Future Research</h3>
          <ul className="mt-4 space-y-2 text-muted-foreground list-disc list-inside">
            <li>Longitudinal analysis (6–12 months per employee)</li>
            <li>
              Causal inference (propensity matching,
              difference-in-differences)
            </li>
            <li>Real-time monitoring dashboards</li>
            <li>Intervention A/B testing</li>
            <li>Deep learning (LSTM, transformers) and multi-modal data</li>
          </ul>
        </section>

        <Separator className="my-12" />

        {/* Business Impact */}
        <section>
          <h2 className="text-2xl font-bold tracking-tight">
            Business Impact &amp; ROI
          </h2>
          <Card className="mt-6 border-l-4 border-l-green-500">
            <CardContent className="pt-6 text-muted-foreground space-y-2">
              <p>
                <strong className="text-foreground">Costs of burnout:</strong>{" "}
                $50K–$200K per senior employee turnover, 63% higher sick day
                likelihood, 20–50% healthcare cost increase, team morale
                decline.
              </p>
              <p>
                <strong className="text-foreground">ROI:</strong> Preventing
                just 5 high-value employees from burning out = $250K–$1M+
                savings with minimal implementation cost.
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* Conclusion */}
        <section>
          <h2 className="text-2xl font-bold tracking-tight">Conclusion</h2>
          <Card className="mt-6 border-l-4 border-l-blue-500">
            <CardContent className="pt-6 text-muted-foreground space-y-3">
              <p>
                Burnout is extraordinarily predictable (94.1% R² with Random
                Forest). Task completion dominates everything else with 3x more
                impact than other factors.
              </p>
              <p>
                Traditional interventions address symptoms, not root causes.{" "}
                <strong className="text-foreground">
                  Burnout is an organizational effectiveness problem
                </strong>
                , not an individual resilience issue.
              </p>
              <p>
                After-hours work is organizational poison (+15–20 burnout
                points). Two distinct employee populations exist with different
                needs.
              </p>
              <p className="font-medium text-foreground">
                The new paradigm: From &quot;Are employees working too
                much?&quot; to &quot;Can employees complete their work
                successfully?&quot;
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* Footer */}
        <footer className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-3">
            <Button variant="outline" size="sm" asChild>
              <a
                href="https://www.kaggle.com/code/vickingssoftware/notebook9bdb331afb"
                target="_blank"
                rel="noopener noreferrer"
              >
                Kaggle Notebook
              </a>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <a
                href="https://www.kaggle.com/datasets/sonalshinde123/work-from-home-employee-burnout-dataset"
                target="_blank"
                rel="noopener noreferrer"
              >
                Dataset
              </a>
            </Button>
          </div>
          <Button variant="ghost" size="sm" asChild>
            <Link href="/#research">&larr; Back to Research</Link>
          </Button>
        </footer>
      </article>
    </>
  );
}
