// app/onboarding-flow/page.tsx

"use client";

import { useState } from "react";

type StepStatus = "completed" | "current" | "upcoming";

interface FlowStepProps {
    number: string;
    title: string;
    description?: string;
    icon?: string;
    variant?: "default" | "database" | "aws" | "deploy" | "complete";
}

interface DecisionProps {
    question: string;
}

interface BranchOptionProps {
    label: string;
    isYes: boolean;
    children: React.ReactNode;
}

const FlowStep = ({
    number,
    title,
    description,
    icon,
    variant = "default",
}: FlowStepProps) => {
    const variants = {
        default: "bg-gradient-to-br from-indigo-500 to-purple-600",
        database: "bg-gradient-to-br from-emerald-400 to-teal-500",
        aws: "bg-gradient-to-br from-amber-500 to-orange-600 ring-2 ring-amber-400",
        deploy: "bg-gradient-to-br from-pink-500 to-orange-500",
        complete: "bg-gradient-to-br from-emerald-500 to-lime-500",
    };

    return (
        <div
            className={`${variants[variant]} rounded-xl p-5 text-white min-w-[220px] text-center shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300 cursor-pointer`}
        >
            <div className="bg-white/20 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mx-auto mb-2">
                {icon || number}
            </div>
            <div className="font-semibold text-base">{title}</div>
            {description && (
                <div className="text-xs opacity-80 mt-1">{description}</div>
            )}
        </div>
    );
};

const Decision = ({ question }: DecisionProps) => (
    <div className="bg-linear-to-br from-pink-400 to-rose-500 rounded-xl p-5 min-w-60 text-center shadow-lg">
        <div className="text-2xl mb-1">◆</div>
        <div className="text-white font-semibold text-sm">{question}</div>
    </div>
);

const BranchOption = ({ label, isYes, children }: BranchOptionProps) => (
    <div className="flex flex-col items-center gap-3">
        <span
            className={`px-4 py-1.5 rounded-full text-sm font-semibold ${isYes
                    ? "bg-emerald-500/20 text-emerald-400"
                    : "bg-red-500/20 text-red-400"
                }`}
        >
            {isYes ? "✓ YES" : "✗ NO"}
        </span>
        {children}
    </div>
);

const SubStep = ({
    children,
    variant = "yes",
}: {
    children: React.ReactNode;
    variant?: "yes" | "no" | "alt";
}) => {
    const variants = {
        yes: "bg-gradient-to-br from-cyan-400 to-sky-500",
        no: "bg-gradient-to-br from-pink-400 to-amber-400",
        alt: "bg-gradient-to-br from-violet-400 to-pink-300",
    };

    return (
        <div
            className={`${variants[variant]} rounded-lg px-5 py-3 text-white min-w-[180px] text-center text-sm font-medium shadow-md`}
        >
            {children}
        </div>
    );
};

const Arrow = ({ direction = "down" }: { direction?: "down" | "right" }) => (
    <div
        className={`text-indigo-400 text-2xl font-bold ${direction === "down" ? "text-center" : ""}`}
    >
        {direction === "down" ? "↓" : "→"}
    </div>
);

const Connector = () => (
    <div className="w-0.5 h-8 bg-linear-to-b from-indigo-500 to-purple-500 mx-auto" />
);

const MergePoint = () => (
    <div className="w-5 h-5 bg-indigo-500 rounded-full mx-auto shadow-lg shadow-indigo-500/50" />
);

const Divider = () => (
    <div className="w-4/5 h-px bg-linear-to-r from-transparent via-indigo-500 to-transparent mx-auto my-8" />
);

const PhaseLabel = ({ children }: { children: React.ReactNode }) => (
    <div className="text-emerald-400 text-xs font-semibold uppercase tracking-widest text-center mb-4">
        {children}
    </div>
);

const IntegrationStep = ({
    icon,
    number,
    title,
    description,
}: {
    icon: string;
    number: string;
    title: string;
    description: string;
}) => (
    <div className="bg-linear-to-br from-teal-500 to-emerald-500 rounded-lg px-5 py-4 text-white text-center shadow-lg min-w-[140px]">
        <div className="text-2xl mb-1">{icon}</div>
        <div className="font-semibold">
            {number}. {title}
        </div>
        <div className="text-xs opacity-80">{description}</div>
    </div>
);

export default function OnboardingFlowPage() {
    return (
        <div className="min-h-screen bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 py-12 px-4">
            <div className="max-w-5xl mx-auto">
                {/* Header */}
                <h1 className="text-3xl font-bold text-white text-center mb-2">
                    🚀 Onboarding Flow
                </h1>
                <p className="text-slate-400 text-center text-sm mb-10">
                    User Journey: Magic Link → Deployment → Credentials
                </p>

                {/* Flow Container */}
                <div className="flex flex-col gap-5 items-center">
                    {/* Phase 1 */}
                    <PhaseLabel>Phase 1: Authentication & Payment</PhaseLabel>

                    <FlowStep
                        number="1"
                        title="Magic Link Landing"
                        description="User arrives from email link"
                    />

                    <Arrow />

                    <FlowStep
                        number="2"
                        title="Payment"
                        description="Process payment (Stripe)"
                    />

                    <Arrow />

                    <FlowStep
                        number="3"
                        title="🗄️ Tenant Record Created"
                        description="Database entry + Credits allocated"
                        variant="database"
                    />

                    <Divider />

                    {/* Phase 2 */}
                    <PhaseLabel>Phase 2: Business Setup</PhaseLabel>

                    <Decision question="Do you have a company?" />

                    <div className="flex justify-center gap-24 mt-4">
                        <BranchOption label="YES" isYes={true}>
                            <SubStep variant="yes">Enter Company Name</SubStep>
                        </BranchOption>

                        <BranchOption label="NO" isYes={false}>
                            <SubStep variant="no">
                                Enter Name
                                <br />
                                <span className="text-xs opacity-80">→ ABN Lookup</span>
                            </SubStep>
                        </BranchOption>
                    </div>

                    <Connector />
                    <MergePoint />
                    <Arrow />

                    <Decision question="Do you own a domain?" />

                    <div className="flex justify-center gap-24 mt-4">
                        <BranchOption label="YES" isYes={true}>
                            <SubStep variant="yes">
                                Connect Domain
                                <br />
                                <span className="text-xs">Google Workspace</span>
                            </SubStep>
                        </BranchOption>

                        <BranchOption label="NO" isYes={false}>
                            <div className="flex flex-col items-center gap-3">
                                <SubStep variant="no">
                                    Search Availability
                                    <br />
                                    <span className="text-xs opacity-80">
                                        (based on business name)
                                    </span>
                                </SubStep>
                                <Arrow />
                                <SubStep variant="alt">
                                    Purchase Domain
                                    <br />
                                    <span className="text-xs">Google/Microsoft</span>
                                </SubStep>
                            </div>
                        </BranchOption>
                    </div>

                    <Connector />
                    <MergePoint />
                    <Arrow />

                    <FlowStep
                        number="4"
                        title="Workspace Connection"
                        description="Connect domain with workspace"
                    />

                    <Divider />

                    {/* Phase 3 */}
                    <PhaseLabel>Phase 3: Integration & Branding</PhaseLabel>

                    <div className="flex items-center justify-center gap-5 flex-wrap">
                        <IntegrationStep
                            icon="📞"
                            number="5"
                            title="Twilio"
                            description="Integration"
                        />
                        <Arrow direction="right" />
                        <IntegrationStep
                            icon="🎨"
                            number="6"
                            title="Branding"
                            description="Logo, Colors"
                        />
                        <Arrow direction="right" />
                        <IntegrationStep
                            icon="🌐"
                            number="7"
                            title="Website"
                            description="Generation"
                        />
                    </div>

                    <Divider />

                    {/* Phase 4 */}
                    <PhaseLabel>Phase 4: Deployment & Credentials</PhaseLabel>

                    <FlowStep
                        number="8"
                        title="🚀 DEPLOY TO DOMAIN"
                        variant="deploy"
                    />

                    <Arrow />

                    <FlowStep
                        number="9"
                        icon="🔐"
                        title="User Credentials Generated"
                        description="AWS Cognito • Email with login details sent"
                        variant="aws"
                    />

                    <Arrow />

                    <FlowStep
                        number="✅"
                        title="ONBOARDING COMPLETE"
                        description="User can now login to their dashboard"
                        variant="complete"
                    />
                </div>

                {/* Legend */}
                <div className="flex justify-center gap-8 mt-12 flex-wrap">
                    {[
                        { color: "bg-gradient-to-r from-indigo-500 to-purple-600", label: "Main Steps" },
                        { color: "bg-gradient-to-r from-pink-400 to-rose-500", label: "Decision Points" },
                        { color: "bg-gradient-to-r from-emerald-400 to-teal-500", label: "Database" },
                        { color: "bg-gradient-to-r from-amber-500 to-orange-600", label: "AWS Services" },
                    ].map((item) => (
                        <div key={item.label} className="flex items-center gap-2 text-slate-400 text-xs">
                            <div className={`w-5 h-5 rounded ${item.color}`} />
                            {item.label}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}