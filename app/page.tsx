"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail, CheckCircle, Shield, Brain, Database, Zap, Users, Lock } from "lucide-react"

export default function ComingSoonPage() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsSubmitted(true)
    setIsLoading(false)
    setEmail("")
  }

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        {/* Main glow */}
        <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-gradient-to-r from-red-500/8 via-blue-500/4 to-purple-500/6 rounded-full blur-3xl"></div>

        {/* Secondary glows */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-red-400/8 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-48 h-48 bg-blue-400/6 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-2/3 left-1/6 w-32 h-32 bg-purple-400/4 rounded-full blur-xl animate-pulse delay-2000"></div>
      </div>

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-red-300/15 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
        <div className="max-w-5xl mx-auto text-center space-y-12">
          {/* Enhanced Glass Container */}
          <div className="backdrop-blur-2xl bg-gradient-to-b from-white/8 to-white/3 border border-white/10 rounded-3xl p-8 md:p-16 shadow-2xl shadow-black/20 relative overflow-hidden">
            {/* Inner glow effect */}
            <div className="absolute inset-0 bg-gradient-to-b from-red-500/3 via-transparent to-blue-500/3 rounded-3xl"></div>

            <div className="relative z-10">
              {/* Logo with rounded corners */}
              <div className="flex justify-center mb-12">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-red-500/15 via-blue-500/10 to-purple-500/15 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                  <div className="relative backdrop-blur-sm bg-gradient-to-b from-white/15 to-white/5 rounded-3xl p-6 border border-white/20 shadow-xl">
                    <div className="w-0 h-0 md:w-32 md:h-32 rounded-2xl overflow-hidden bg-white/10 p-3">
                      <Image
                        src="/logo.png"
                        alt="Locama Logo"
                        width={128}
                        height={128}
                        className="w-full h-full object-contain rounded-2xl"
                        priority
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Main Content */}
              <div className="space-y-12">
                <div className="space-y-8">
                  <div className="flex items-center justify-center space-x-2 mb-6">
                    <Shield className="w-5 h-5 text-red-400 animate-pulse" />
                    <span className="text-red-400/90 font-medium text-sm uppercase tracking-wider">
                      Local AI • Privacy First
                    </span>
                    <Shield className="w-5 h-5 text-red-400 animate-pulse delay-500" />
                  </div>

                  <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-white via-gray-100 to-red-200 bg-clip-text text-transparent tracking-tight leading-tight">
                    AI-Powered
                    <br />
                    <span className="text-3xl md:text-5xl lg:text-6xl">Consulting Platform</span>
                  </h1>

                  <p className="text-lg md:text-xl text-gray-300/90 max-w-3xl mx-auto leading-relaxed">
                    Transform your consulting practice with locally-hosted AI that learns from your files, videos, and
                    expertise to enhance decision-making and client outcomes.
                  </p>
                </div>

                {/* Key Features */}
                <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
                  <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
                    <Database className="w-8 h-8 text-red-400 mx-auto mb-3" />
                    <h3 className="text-white font-semibold mb-2">Smart Data Collection</h3>
                    <p className="text-gray-400 text-sm">
                      Automatically organize and index all your consulting materials
                    </p>
                  </div>
                  <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
                    <Brain className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                    <h3 className="text-white font-semibold mb-2">AI-Enhanced Insights</h3>
                    <p className="text-gray-400 text-sm">Get intelligent recommendations based on your expertise</p>
                  </div>
                  <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
                    <Lock className="w-8 h-8 text-green-400 mx-auto mb-3" />
                    <h3 className="text-white font-semibold mb-2">Local & Secure</h3>
                    <p className="text-gray-400 text-sm">Your data stays on your servers - complete privacy control</p>
                  </div>
                </div>

                {/* Email Signup Form */}
                <div className="max-w-lg mx-auto">
                  {!isSubmitted ? (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="backdrop-blur-md bg-gradient-to-b from-white/10 to-white/5 border border-white/20 rounded-2xl p-6 shadow-xl">
                        <div className="text-center mb-4">
                          <h3 className="text-white font-semibold mb-1">Join the Beta Waitlist</h3>
                          <p className="text-gray-400 text-sm">Be among the first consultants to experience Locama</p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4">
                          <div className="relative flex-1">
                            <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-red-400/80 w-5 h-5" />
                            <Input
                              type="email"
                              placeholder="Enter your business email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              className="pl-12 h-12 text-base bg-white/10 border-white/30 focus:border-red-400/60 focus:ring-red-400/30 text-white placeholder:text-gray-400 backdrop-blur-sm rounded-xl"
                              required
                            />
                          </div>
                          <Button
                            type="submit"
                            disabled={isLoading || !email}
                            className="h-12 px-6 bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 text-white font-medium shadow-lg shadow-red-500/20 border-0 relative overflow-hidden group rounded-xl"
                          >
                            <div className="absolute inset-0 bg-gradient-to-r from-red-400 to-pink-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <div className="relative flex items-center space-x-2">
                              {isLoading ? (
                                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                              ) : (
                                <>
                                  <Zap className="w-4 h-4" />
                                  <span>Get Early Access</span>
                                </>
                              )}
                            </div>
                          </Button>
                        </div>
                      </div>
                    </form>
                  ) : (
                    <div className="backdrop-blur-md bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-400/30 rounded-2xl p-6 shadow-xl">
                      <div className="flex items-center justify-center space-x-3 text-green-400">
                        <CheckCircle className="w-6 h-6 animate-pulse" />
                        <span className="font-medium text-lg">{"Welcome to the beta! We'll be in touch soon."}</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Development Status & Benefits */}
                <div className="pt-8 space-y-8">
                  <div className="max-w-md mx-auto">
                    <p className="text-red-400/80 font-medium text-sm uppercase tracking-wider mb-4">
                      Development Status
                    </p>
                    <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl p-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-gray-300">Core Platform</span>
                        <span className="text-sm text-red-400 font-medium">7%</span>
                      </div>
                      <div className="w-full bg-gray-700/50 rounded-full h-2">
                        <div className="bg-gradient-to-r from-red-500 to-pink-500 h-2 rounded-full w-[7%] shadow-sm shadow-red-500/30"></div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto text-center">
                    <div className="space-y-2">
                      <Users className="w-6 h-6 text-blue-400 mx-auto" />
                      <div className="text-xs text-gray-400 uppercase tracking-wide">Target Users</div>
                      <div className="text-sm text-white font-medium">Consultants/Law Firms</div>
                    </div>
                    <div className="space-y-2">
                      <Shield className="w-6 h-6 text-green-400 mx-auto" />
                      <div className="text-xs text-gray-400 uppercase tracking-wide">Deployment</div>
                      <div className="text-sm text-white font-medium">Local/On-Premise</div>
                    </div>
                    <div className="space-y-2">
                      <Brain className="w-6 h-6 text-purple-400 mx-auto" />
                      <div className="text-xs text-gray-400 uppercase tracking-wide">AI Model</div>
                      <div className="text-sm text-white font-medium">LLM Powered</div>
                    </div>
                    <div className="space-y-2">
                      <Database className="w-6 h-6 text-red-400 mx-auto" />
                      <div className="text-xs text-gray-400 uppercase tracking-wide">Data Types</div>
                      <div className="text-sm text-white font-medium">Files & Videos</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="pt-8 pb-8">
            <p className="text-sm text-gray-500">
              © 2024 Locama. Empowering consultants with intelligent, secure AI solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
